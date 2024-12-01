import { Router } from 'express'
import {
    createApplicationController,
    deleteApplicationController,
    getAllApplicationController,
    getByIdApplicationController,
    updateIdApplicationController,
} from '../controller/index.controller.js'
import {
    pagination,
    validationMiddleware,
} from '../middleware/index.middleware.js'
import { applicationSchema } from '../validations/index.schema.js'
export const applicationRouter = Router()

applicationRouter.get('/', pagination, getAllApplicationController)
applicationRouter.get('/:id', getByIdApplicationController)
applicationRouter.post(
    '/create',
    validationMiddleware(applicationSchema),
    createApplicationController,
)
applicationRouter.put('/update/:id', updateIdApplicationController)
applicationRouter.delete('/delete/:id', deleteApplicationController)
