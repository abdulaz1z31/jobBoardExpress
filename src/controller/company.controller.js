import {
    createCompanyService,
    deleteCompanyService,
    getAllCompanyService,
    getByICompanyService,
    updateCompanyService,
} from '../service/index.service.js'
import { logger } from '../utils/index.utils.js'
export const getAllCompanyController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/company/ METHOD : GET')
        const currentComany = await getAllCompanyService()
        if (!currentComany) {
            return res.status(404).send('Not found!!!')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentComany,
        })
    } catch (error) {
        logger.error('Router /api/v1/company/all METHOD : GET')
        next(error)
    }
}
export const getByIdCompanyController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/company/:id METHOD : GET')
        const currentComany = await getByICompanyService(req.params.id)
        if (!currentComany) {
            return res.status(404).send('Not found!!!')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentComany,
        })

    } catch (error) {
        logger.error('Router /api/v1/company/:id METHOD : GET')
        next(error)
    }
}
export const createCompanyController = async (req, res, next) => {
    try {
        console.log(req.body);
        logger.info('Router /api/v1/company/create METHOD : POST')
        const currentComany = await createCompanyService(req.body)
        if (!currentComany) {
            return res.status(404).send('Not found!!!')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentComany,
        })
    } catch (error) {
        logger.error('Router /api/v1/company/create METHOD : POST')
        next(error)
    }
}
export const updateIdCompanyController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/company/update/:id METHOD : PUT')
        const currentComany = await updateCompanyService(req.params.id, req.body)
        console.log(currentComany);
        if (!currentComany) {
            return res.status(404).send('Not found!!!')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentComany,
        })
    } catch (error) {
        logger.error('Router /api/v1/company/update/:id METHOD : PUT')
        next(error)
    }
}
export const deleteCompanyController = async (req, res, next) => {
    try {
        logger.info('Router /api/v1/company/delete/:id METHOD : DELETE')
        const currentComany = await deleteCompanyService(req.params.id)
        if (!currentComany) {
            return res.status(404).send('Not found!!!')
        }
        return res.status(201).send({
            message: 'Ok',
            data: currentComany,
        })
    } catch (error) {
        logger.error('Router /api/v1/company/delete/:id METHOD : DELETE')
        next(error)
    }
}
