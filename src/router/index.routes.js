import { Router } from 'express'
import { authRouter } from './auth.routes.js'
import { userRouter } from './user.routes.js'
import { messageRouter } from './message.routes.js'
import { applicationRouter } from './application.routes.js'
import { companyRouter } from './company.routes.js'
import { reviewRouter } from './review.routes.js'
import { jobalertRouter } from './jobalert.routes.js'
import { joblistRouter } from './joblists.routes.js'
import { categoryRouter } from './category.routes.js'
import { wishlistRouter } from './wishlist.routes.js'
import { skillsRouter } from './skills.routes.js'
import { userSkillsRouter } from './user_skills.routes.js'

export const router = Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/message', messageRouter)
router.use('/company', companyRouter)
router.use('/review', reviewRouter)
router.use('/categories', categoryRouter)
router.use('/jobs', joblistRouter)
router.use('/jobalert', jobalertRouter)
router.use('/application', applicationRouter)
router.use('/skills', skillsRouter)
router.use('/user_skills', userSkillsRouter)
router.use('/wishlist', wishlistRouter)
