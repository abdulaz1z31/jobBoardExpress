import { Router } from 'express'
import { deleteUserById, getAllUsers, getUserById, updateUserById } from '../controller/index.controller.js'

export const userRouter = Router()

userRouter.get('/all', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.put('/:id', updateUserById)
userRouter.use('/:id', deleteUserById)
