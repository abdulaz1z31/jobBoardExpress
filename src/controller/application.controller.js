import {
    createApplicationService,
    deleteApplicationService,
    getAllApplicationService,
    getByIdApplicationService,
    updateApplicationService,
} from '../service/index.service.js'

export const getAllApplicationController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/application/ METHOD : GET')
        const currentApplication = await getAllApplicationService(req.pagination)
        if (!currentApplication) {
            res.status(404).send('Not Found')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentApplication,
        })
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
            res.status(404).send('Not Found')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentApplication,
        })
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
            res.status(404).send('Not Found')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentApplication,
        })
    } catch (error) {
        logger.error('Router /api/v1/application/create METHOD : POST')
        next(error)
    }
}
export const updateIdApplicationController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/application/update/:id METHOD : PUT')
        const currentApplication = await updateApplicationService(req.params.id)
        if (!currentApplication) {
            res.status(404).send('Not Found')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentApplication,
        })
    } catch (error) {
        logger.error('Router /api/v1/application/update/:id METHOD : PUT')
        next(error)
    }
}
export const deleteApplicationController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/application/delete/:id METHOD : DELETE')
        const currentApplication = await deleteApplicationService(req.params.id)

        if (!currentApplication) {
            res.status(404).send('Not Found')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentApplication,
        })
    } catch (error) {
        logger.error('Router /api/v1/application/delete/:id METHOD : DELETE')
        next(error)
    }
}
