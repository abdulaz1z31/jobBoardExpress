import { Router } from 'express'
import {
    createApplicationController,
    deleteApplicationController,
    getAllApplicationController,
    getByIdApplicationController,
    updateIdApplicationController,
} from '../controller/index.controller.js'

export const applicationRouter = Router()

applicationRouter.get('/', getAllApplicationController)
applicationRouter.get('/:id', getByIdApplicationController)
applicationRouter.post('/create', createApplicationController)
applicationRouter.put('/update/:id', updateIdApplicationController)
applicationRouter.delete('/delete/:id', deleteApplicationController)
