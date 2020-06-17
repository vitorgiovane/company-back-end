import { Router } from 'express'

import CreateUserService from '../services/CreateUser'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
  const { name, email, password, gender, phone, country, cpf } = request.body

  const createUser = new CreateUserService()
  const user = await createUser.run({
    name,
    email,
    password,
    gender,
    phone,
    country,
    cpf
  })
  delete user.password

  return response.json(user)
})

export default usersRouter
