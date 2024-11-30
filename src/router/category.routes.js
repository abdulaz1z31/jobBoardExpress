import { Router } from 'express'
import {
    getAllCategoriesCon,
    getCategorysByIdCon,
    createCategoryCon,
    updateCategoryCon,
    deleteCategoryCon,
} from '../controller/category.controller.js'

import { pagination, validationMiddleware } from '../middleware/index.middleware.js'

export const categoryRouter = Router()

categoryRouter.get('/', pagination, getAllCategoriesCon)
categoryRouter.get('/:id', getCategorysByIdCon)
categoryRouter.post('/', createCategoryCon)
categoryRouter.put('/:id', updateCategoryCon)
categoryRouter.delete('/:id', deleteCategoryCon)
