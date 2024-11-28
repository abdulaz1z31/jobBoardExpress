import { Router } from 'express'
import { loginUser, registerUser } from '../controller/index.controller.js'
import { validationMiddleware } from '../middleware/validation.schema.js'
import { registerSchema } from '../validations/register.schema.js'
import { loginSchema } from '../validations/login.schema.js'

export const authRouter = Router()

authRouter.post('/register',validationMiddleware(registerSchema), registerUser)
authRouter.post('/login', validationMiddleware(loginSchema), loginUser)
