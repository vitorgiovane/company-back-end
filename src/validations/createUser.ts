import { getRepository } from 'typeorm'
import { getName } from 'country-list'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'

import User from '../models/User'
import AppError from '../errors/AppError'
import { getGenderCode } from '../utils/genders'

interface Request {
  name: string
  email: string
  password: string
  gender: 'male' | 'female'
  phone: string
  country: string
  cpf: string
}

const createUser = async ({
  name,
  email,
  password,
  gender,
  phone,
  country,
  cpf
}: Request): Promise<void> => {
  checkRequiredAttributes({
    name,
    email,
    password,
    gender,
    phone,
    country,
    cpf
  })
  checkName(name)
  checkCpf(cpf)
  await checkUserExists(email, cpf)
  checkCountry(country)
  checkGender(gender)
  checkPhone(phone)
}

const checkRequiredAttributes = ({
  name,
  email,
  password,
  gender,
  phone,
  country,
  cpf
}: Request) => {
  if (!name || !email || !password || !gender || !phone || !country || !cpf) {
    throw new AppError(
      'The attributes name, email, password, gender, phone, country and cpf are required.'
    )
  }
}

const checkCpf = (cpf: string) => {
  const validCpf = cpfValidator.isValid(cpf)
  if (!validCpf) {
    throw new AppError('Invalid CPF.')
  }
}

const checkName = (name: string) => {
  const regex = /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i
  const validName = regex.test(name)
  if (!validName) {
    throw new AppError(
      'Invalid name. Enter a full name without symbols. (Accents and dots are allowed).'
    )
  }
}

const checkUserExists = async (email: string, cpf: string): Promise<void> => {
  const usersRepository = getRepository(User)

  const user = await usersRepository.findOne({
    where: [{ email }, { cpf }]
  })

  if (!user) return

  if (user.cpf === cpf) {
    throw new AppError('The user CPF is already registered.')
  }

  throw new AppError('The user e-mail is already registered.')
}

const checkCountry = (country: string) => {
  const countryCode = getName(country)
  if (!countryCode) {
    throw new AppError(
      'The country is invalid. Enter the ISO Alpha-2 code of the country. Reference: https://www.iso.org/obp/ui/#search/code/'
    )
  }
}

const checkGender = (gender: string) => {
  const genderCode: number = getGenderCode(gender)
  if (genderCode === 0) {
    throw new AppError('The gender is invalid.')
  }
}

const checkPhone = (phone: string) => {
  const regex = /^(?:(?:\+|00)?(\d{2})\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/

  const validPhone = regex.test(phone)
  if (!validPhone) {
    throw new AppError(
      'Invalid phone. Follow the pattern: +XX (XX) XXXXX-XXXX or +XX (XX) XXXX-XXXX.'
    )
  }
}

export default createUser
