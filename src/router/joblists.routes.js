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
    validationMiddleware,
} from '../middleware/index.middleware.js'
import { joblistingScheme } from '../validations/index.schema.js'
export const joblistRouter = Router()
joblistRouter.get('/', pagination, getAllJobListsCon)
joblistRouter.get('/:id', getJobListsByIdCon)
joblistRouter.post('/', checkToken, validationMiddleware(joblistingScheme), createJobListCon)
joblistRouter.put(
    '/:id',
    // validationMiddleware(joblistingScheme),
    updateJobListCon,
)
joblistRouter.delete('/:id', deleteJobListCon)
