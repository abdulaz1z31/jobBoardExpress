import { logger } from '../utils/logger.utils.js'

/**
 *
 * @param {Object} schema
 */
export const checkCategoryDataMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body)

        if (error) {
            logger.error(error.details[0].message)
            res.status(400).send({
                error: 'Invalid data',
                details: error.details[0].message,
            })
        } else {
            next()
        }
    }
}

/**
 *
 * @param {Object} schema
 */
export const updateCategoryDataMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate({ ...req.body, ...req.params })

        if (error) {
            logger.error(error.details[0].message)
            res.status(400).send({
                error: 'Invalid data',
                details: error.details[0].message,
            })
        } else {
            next()
        }
    }
}
