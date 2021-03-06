import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import AppError from '../errors/AppError'

import User from '../models/User'
import authConfig from '../config/auth'

interface Request {
  email: string
  password: string
}

interface Response {
  user: User
  token: string
}

class AuthenticateUser {
  public async run({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne({ email })

    console.log('user', user)

    if (!user) {
      throw new AppError('Incorrect email/password combination.')
    }

    const passwordMatched = await compare(password, user.password)
    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.')
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    })

    return { user, token }
  }
}

export default AuthenticateUser
