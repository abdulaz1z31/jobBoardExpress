import { Router } from 'express'
import {
    getAllJobListsCon,
    getJobListsByIdCon,
    createJobListCon,
    updateJobListCon,
    deleteJobListCon,
} from '../controller/index.controller.js'
export const joblistRouter = Router()
joblistRouter.get('/', getAllJobListsCon)
joblistRouter.get('/:id', getJobListsByIdCon)
joblistRouter.post('/', createJobListCon)
joblistRouter.put('/:id', updateJobListCon)
joblistRouter.delete('/:id', deleteJobListCon)
