import { Router } from 'express'
import { authRouter } from './auth.routes.js'
import { userRouter } from './user.routes.js'
import { jobalertRouter } from './jobalert.routes.js'
import { joblistRouter } from './joblists.routes.js'
export const router = Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/joblists', joblistRouter)
router.use('/jobalert', jobalertRouter)
