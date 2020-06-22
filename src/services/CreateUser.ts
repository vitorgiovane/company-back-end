import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import User from '../models/User'
import { getGenderCode } from '../utils/genders'
import createUserValidator from '../validations/createUser'

interface Request {
  name: string
  email: string
  password: string
  gender: 'male' | 'female'
  phone: string
  country: string
  cpf: string
  newsletter: boolean
}

class CreateUser {
  public async run({
    name,
    email,
    password,
    gender,
    phone,
    country,
    cpf,
    newsletter
  }: Request): Promise<User> {
    await createUserValidator({
      name,
      email,
      password,
      gender,
      phone,
      country,
      cpf
    })

    const usersRepository = getRepository(User)

    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      gender: getGenderCode(gender),
      phone,
      country,
      cpf,
      newsletter
    })
    await usersRepository.save(user)

    return user
  }
}

export default CreateUser
