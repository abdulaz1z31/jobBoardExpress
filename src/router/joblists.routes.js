import { Router } from 'express'
import {
    getAllJobListsCon,
    getJobListsByIdCon,
    createJobListCon,
    updateJobListCon,
    deleteJobListCon,
} from '../controller/index.controller.js'
import {
    checkToken,
    pagination,
    roleGuard,
    validationMiddleware,
} from '../middleware/index.middleware.js'
import { joblistingScheme } from '../validations/index.schema.js'
export const joblistRouter = Router()
joblistRouter.get('/', checkToken, pagination, getAllJobListsCon)
joblistRouter.get('/:id', checkToken,  getJobListsByIdCon)
joblistRouter.post('/', checkToken,  validationMiddleware(joblistingScheme), createJobListCon)
joblistRouter.put('/:id',  checkToken, validationMiddleware(joblistingScheme), updateJobListCon)
joblistRouter.delete('/:id', checkToken, roleGuard('admin'), deleteJobListCon)
