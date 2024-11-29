import { Router } from 'express'
import { authRouter } from './auth.routes.js'
import { userRouter } from './user.routes.js'
import { applicationRouter } from './application.routes.js'
import { companyRouter } from './company.routes.js'
import { reviewRouter } from './review.routes.js'
import { jobalertRouter } from './jobalert.routes.js'
import { joblistRouter } from './joblists.routes.js'
export const router = Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/application', applicationRouter)
router.use('/company', companyRouter)
router.use('/review', reviewRouter)
router.use('/joblists', joblistRouter)
router.use('/jobalert', jobalertRouter)
