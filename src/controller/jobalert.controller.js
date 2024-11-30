import {
    getAllJobAlertsService,
    getJobAlertByIdService,
    createJobAlertService,
    updateJobAlertService,
    deleteJobAlertService,
} from '../service/index.service.js'
import { logger, statusCode } from '../utils/index.utils.js'
export const getAllJobAlertsCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/jobalert METHOD: GET`)
        const jobalerts = await getAllJobAlertsService()
        res.status(statusCode.OK).send({
            msg: 'OK',
            JobAlerts: jobalerts,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/jobalert METHOD: GET,Error: ${error.message}`,
        )
        if (error.message === 'Jobalert not found') {
            return res.status(statusCode.NOT_FOUND).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
export const getJobAlertByIdCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/jobalert/${req.params.id} METHOD: GET`)
        const jobalert = await getJobAlertByIdService(req.params.id)
        res.status(statusCode.OK).send({
            msg: 'OK',
            JobAlert: jobalert,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/jobalert/${req.params.id} METHOD: GET,Error: ${error.message}`,
        )
        if (error.message === 'Jobalert not found') {
            return res.status(statusCode.NOT_FOUND).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
export const createJobAlertCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/jobalert METHOD: POST`)
        const newJobAlert = await createJobAlertService(req.body)
        res.status(statusCode.CREATED).send({
            msg: 'NEW JOBALERT',
            newJobAlert: newJobAlert,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/jobalert METHOD: POST,Error: ${error.message}`,
        )
        if (error.message === 'Jobalert not created') {
            return res.status(statusCode.BAD_REQUEST).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
export const updateJobAlertCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/jobalert/${req.params.id} METHOD: PUT`)
        const updatedJobAlert = await updateJobAlertService(
            req.params.id,
            req.body,
        )
        res.status(statusCode.OK).send({
            msg: 'UPDATED JOBALERT',
            updatedJobAlert: updatedJobAlert,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/jobalert/${req.params.id} METHOD: PUT,Error: ${error.message}`,
        )
        if (error.message === 'Jobalert not updated') {
            return res.status(statusCode.BAD_REQUEST).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
export const deleteJobAlertCon = async (req, res, next) => {
    try {
        logger.info(`Routes: /api/v1/jobalert/${req.params.id} METHOD: DELETE`)
        const deletedJobAlert = await deleteJobAlertService(req.params.id)
        res.status(statusCode.OK).send({
            msg: 'DELETED JOBALERT',
            deletedJobAlert: deletedJobAlert,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/jobalert/${req.params.id} METHOD: DELETE,Error: ${error.message}`,
        )
        if (error.message === 'Jobalert not deleted') {
            return res.status(statusCode.BAD_REQUEST).send({
                error: true,
                message: error.message,
            })
        }
        next(error.message)
    }
}
