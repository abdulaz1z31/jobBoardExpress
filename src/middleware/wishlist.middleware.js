import { logger } from '../utils/logger.utils.js'
import Joi from 'joi'

/**
 * @param {Object} schema
 */
export const checkWishlistDataMiddleware = (schema) => {
    return (req, res, next) => {
        const { user_id, product_id, create_at, update_at } = req.body

        const { error } = schema.validate({
            user_id,
            product_id,
            create_at,
            update_at,
        })

        if (error) {
            logger.error(error.details[0].message)
            return res
                .status(400)
                .send({
                    error: 'Invalid data',
                    details: error.details[0].message,
                })
        } else {
            next()
        }
    }
}

/**
 * @param {Object} schema
 */
export const updateWishlistDataMiddleware = (schema) => {
    return (req, res, next) => {
        const { user_id, product_id, update_at } = req.body
        const { id } = req.params

        const { error } = schema.validate({
            user_id,
            product_id,
            update_at,
            id,
        })

        if (error) {
            logger.error(error.details[0].message)
            return res
                .status(400)
                .send({
                    error: 'Invalid data',
                    details: error.details[0].message,
                })
        } else {
            next()
        }
    }
}
