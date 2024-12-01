import { Router } from 'express'
import {
    getAllJobAlertsCon,
    getJobAlertByIdCon,
    createJobAlertCon,
    updateJobAlertCon,
    deleteJobAlertCon,
} from '../controller/index.controller.js'
import { checkToken, pagination, roleGuard, validationMiddleware } from '../middleware/index.middleware.js'
import { jobalertScheme } from '../validations/index.schema.js'

export const jobalertRouter = Router()

jobalertRouter.get('/', checkToken, roleGuard('admin'), pagination, getAllJobAlertsCon)
jobalertRouter.get('/:id', checkToken, getJobAlertByIdCon)
jobalertRouter.post('/', checkToken,validationMiddleware(jobalertScheme), createJobAlertCon)
jobalertRouter.put('/:id', checkToken, updateJobAlertCon)
jobalertRouter.delete('/:id', checkToken, deleteJobAlertCon)
