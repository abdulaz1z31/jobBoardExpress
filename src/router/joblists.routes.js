import { Router } from 'express'
import {
    getAllJobListsCon,
    getJobListsByIdCon,
    createJobListCon,
    updateJobListCon,
    deleteJobListCon,
} from '../controller/index.controller.js'
import { pagination, validationMiddleware } from '../middleware/index.middleware.js'
export const joblistRouter = Router()
joblistRouter.get('/', pagination, getAllJobListsCon)
joblistRouter.get('/:id', getJobListsByIdCon)
joblistRouter.post('/', createJobListCon)
joblistRouter.put('/:id', updateJobListCon)
joblistRouter.delete('/:id', deleteJobListCon)
