import { Router } from 'express'
import {
    deleteUserById,
    getAllUsers,
    getUserById,
    updateUserById,
} from '../controller/index.controller.js'
import {
    adminOrSelf,
    checkToken,
    pagination,
    roleGuard,
} from '../middleware/index.middleware.js'

export const userRouter = Router()

userRouter.get('/', checkToken, roleGuard('admin'), pagination, getAllUsers)
userRouter.get('/:id', checkToken, adminOrSelf('admin'), getUserById)
userRouter.put('/:id', checkToken, adminOrSelf('admin'), updateUserById)
userRouter.use('/:id', checkToken, adminOrSelf('admin'), deleteUserById)
