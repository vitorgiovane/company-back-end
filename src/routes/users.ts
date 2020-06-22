import { Router } from 'express'

import CreateUserService from '../services/CreateUser'
import createUserResponse from '../responses/createUser'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
  const {
    name,
    email,
    password,
    gender,
    phone,
    country,
    cpf,
    newsletter = true
  } = request.body

  const treatedCpf = cpf.replace(/\D/g, '')
  const treatedCountry = country.toUpperCase()

  const createUser = new CreateUserService()
  const user = await createUser.run({
    name,
    email,
    password,
    gender,
    phone,
    country: treatedCountry,
    cpf: treatedCpf,
    newsletter
  })

  const userResponse = createUserResponse(user)

  return response.json(userResponse)
})

export default usersRouter
