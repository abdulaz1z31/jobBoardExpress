import {
    getAllJoblistsService,
    getJoblistByIdService,
    createJoblistService,
    updateJoblistService,
    deleteJoblistService,
} from '../service/index.service.js'
import { logger, statusCode } from '../utils/index.utils.js'
export const getAllJobListsCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/joblists METHOD: GET`)
        const joblists = await getAllJoblistsService()
        res.status(statusCode.OK).send({
            msg: 'OK',
            Joblists: joblists,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/joblists METHOD: GET,Error: ${error.message}`,
        )
        if (error.message === 'Joblists not found') {
            return res.status(statusCode.NOT_FOUND).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
export const getJobListsByIdCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/joblists/${req.params.id} METHOD: GET`)
        const joblist = await getJoblistByIdService(req.params.id)
        res.status(statusCode.OK).send({
            msg: 'OK',
            Joblist: joblist,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/joblists/${req.params.id} METHOD: GET,Error: ${error.message}`,
        )
        if (error.message === 'Joblist not found') {
            return res.status(statusCode.NOT_FOUND).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
export const createJobListCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/joblists METHOD: POST`)
        const newJoblist = await createJoblistService(req.body)
        res.status(statusCode.CREATED).send({
            msg: 'NEW JOBLIST',
            newJoblist: newJoblist,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/joblists METHOD: POST,Error: ${error.message}`,
        )
        if (error.message === 'Joblist not created') {
            return res.status(statusCode.BAD_REQUEST).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
export const updateJobListCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/joblists/${req.params.id} METHOD: PUT`)
        const updatedJoblist = await updateJoblistService(
            req.params.id,
            req.body,
        )
        res.status(statusCode.OK).send({
            msg: 'UPDATED JOBLIST',
            updatedJoblist: updatedJoblist,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/joblists/${req.params.id} METHOD: PUT,Error: ${error.message}`,
        )
        if (error.message === 'Joblist not updated') {
            return res.status(statusCode.BAD_REQUEST).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
export const deleteJobListCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/joblists/${req.params.id} METHOD: DELETE`)
        const deletedJoblist = await deleteJoblistService(req.params.id)
        res.status(statusCode.OK).send({
            msg: 'DELETED JOBLIST',
            deletedJoblist: deletedJoblist,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/joblists/${req.params.id} METHOD: DELETE,Error: ${error.message}`,
        )
        if (error.message === 'Joblist not deleted') {
            return res.status(statusCode.BAD_REQUEST).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
