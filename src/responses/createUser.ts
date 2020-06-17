import { getGenderName } from '../utils/genders'

interface Request {
  name: string
  email: string
  password: string
  gender: number
  phone: string
  country: string
  cpf: string
}

interface Response {
  name: string
  email: string
  gender: string
  phone: string
  country: string
  cpf: string
}

const createUser = ({
  name,
  email,
  password: _,
  gender,
  phone,
  country,
  cpf
}: Request): Response => {
  const genderName = getGenderName(gender)

  const response = {
    name,
    email,
    gender: genderName,
    phone,
    country,
    cpf
  }

  return response
}

export default createUser
