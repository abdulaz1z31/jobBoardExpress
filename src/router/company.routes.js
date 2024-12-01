import { Router } from 'express'
import {
    createCompanyController,
    deleteCompanyController,
    getAllCompanyController,
    getByIdCompanyController,
    updateIdCompanyController,
} from '../controller/index.controller.js'
import { pagination } from '../middleware/index.middleware.js'

export const companyRouter = Router()

companyRouter.get('/', pagination, getAllCompanyController)
companyRouter.get('/:id', getByIdCompanyController)
companyRouter.post('/', createCompanyController)
companyRouter.put('/:id', updateIdCompanyController)
companyRouter.delete('/:id', deleteCompanyController)
