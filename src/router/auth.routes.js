import { Router } from 'express'
import { loginUser, registerUser } from '../controller/index.controller.js'

export const authRouter = Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
