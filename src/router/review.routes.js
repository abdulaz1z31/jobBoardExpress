import { Router } from 'express'
import {
    createCompanyController,
    deleteCompanyController,
    getAllCompanyController,
    getByIdCompanyController,
    updateIdCompanyController,
} from '../controller/index.controller.js'

export const reviewRouter = Router()

reviewRouter.get('/', getAllCompanyController)
reviewRouter.get('/:id', getByIdCompanyController)
reviewRouter.post('/create', createCompanyController)
reviewRouter.put('/update/:id', updateIdCompanyController)
reviewRouter.delete('/delete/:id', deleteCompanyController)
