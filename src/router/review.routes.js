import { Router } from 'express'
import {
    createReviewController,
    deleteReviewController,
    getAllReviewController,
    getByIdReviewController,
    updateIdReviewController,
} from '../controller/index.controller.js'

export const reviewRouter = Router()

reviewRouter.get('/', getAllReviewController)
reviewRouter.get('/:id', getByIdReviewController)
reviewRouter.post('/create', createReviewController)
reviewRouter.put('/update/:id', updateIdReviewController)
reviewRouter.delete('/delete/:id', deleteReviewController)
