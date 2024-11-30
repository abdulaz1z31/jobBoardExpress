import { Router } from 'express'
import {
    createCompanyController,
    deleteCompanyController,
    getAllCompanyController,
    getByIdCompanyController,
    updateIdCompanyController,
} from '../controller/index.controller.js'

export const companyRouter = Router()

companyRouter.get('/', getAllCompanyController)
companyRouter.get('/:id', getByIdCompanyController)
companyRouter.post('/create', createCompanyController)
companyRouter.put('/update/:id', updateIdCompanyController)
companyRouter.delete('/delete/:id', deleteCompanyController)
