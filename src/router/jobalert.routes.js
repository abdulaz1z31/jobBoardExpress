import { Router } from 'express'
import {
    getAllJobAlertsCon,
    getJobAlertByIdCon,
    createJobAlertCon,
    updateJobAlertCon,
    deleteJobAlertCon,
} from '../controller/index.controller.js'
export const jobalertRouter = Router()
jobalertRouter.get('/', getAllJobAlertsCon)
jobalertRouter.get('/:id', getJobAlertByIdCon)
jobalertRouter.post('/', createJobAlertCon)
jobalertRouter.put('/:id', updateJobAlertCon)
jobalertRouter.delete('/:id', deleteJobAlertCon)
