import {
    createApplicationService,
    deleteApplicationService,
    getAlldApplicationService,
    getByIdApplicationService,
    updateApplicationService,
} from '../service/index.service.js'

export const getAllApplicationController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/application/all METHOD : GET')
        const currentApplication = await getAlldApplicationService()
        if (!currentApplication) {
            res.send('All')
        }
    } catch (error) {
        logger.error('Router /api/v1/application/all METHOD : GET')
        next(error)
    }
}

export const getByIdApplicationController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/application/:id METHOD : GET')
        const currentApplication = await getByIdApplicationService(
            req.params.id,
        )
        if (!currentApplication) {
            res.send('By/id')
        }
    } catch (error) {
        logger.error('Router /api/v1/application/:id METHOD : GET')
        next(error)
    }
}
export const createApplicationController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/application/create METHOD : POST')
        const currentApplication = await createApplicationService(req.body)
        if (!currentApplication) {
            res.send('create')
        }
    } catch (error) {
        logger.error('Router /api/v1/application/create METHOD : POST')
        next(error)
    }
}
export const updateIdApplicationController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/application/update/:id METHOD : UPDATE')
        const currentApplication = await updateApplicationService(req.params.id)
        if (!currentApplication) {
            res.send('Update')
        }
    } catch (error) {
        logger.error('Router /api/v1/application/update/:id METHOD : UPDATE')
        next(error)
    }
}
export const deleteApplicationController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/application/delete/:id METHOD : UPDATE')
        const currentApplication = await deleteApplicationService(req.params.id)
        if (!currentApplication) {
            res.send('Delete')
        }
    } catch (error) {
        logger.error('Router /api/v1/application/delete/:id METHOD : UPDATE')
        next(error)
    }
}
