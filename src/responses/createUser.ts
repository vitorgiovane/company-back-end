import { getGenderName } from '../utils/genders'

interface Request {
  name: string
  email: string
  password: string
  gender: number
  phone: string
  country: string
  cpf: string
  newsletter: boolean
}

interface Response {
  name: string
  email: string
  gender: string
  phone: string
  country: string
  cpf: string
  newsletter: boolean
}

const createUser = ({
  name,
  email,
  password: _,
  gender,
  phone,
  country,
  cpf,
  newsletter
}: Request): Response => {
  const genderName = getGenderName(gender)

  const response = {
    name,
    email,
    gender: genderName,
    phone,
    country,
    cpf,
    newsletter
  }

  return response
}

export default createUser
