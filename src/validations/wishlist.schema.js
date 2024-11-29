import Joi from 'joi';

export const wishlistSchema = Joi.object({
    user_id: Joi.number().integer().required().messages({
        'number.base': 'User ID must be a number',
        'number.integer': 'User ID must be an integer',
        'any.required': 'User ID is required'
    }),
    product_id: Joi.number().integer().required().messages({
        'number.base': 'Product ID must be a number',
        'number.integer': 'Product ID must be an integer',
        'any.required': 'Product ID is required'
    }),
    create_at: Joi.date().iso().required().messages({
        'date.base': 'Create date must be a valid ISO date',
        'any.required': 'Create date is required'
    }),
    update_at: Joi.date().iso().required().messages({
        'date.base': 'Update date must be a valid ISO date',
        'any.required': 'Update date is required'
    }),
});

export const updateWishlistSchema = Joi.object({
    user_id: Joi.number().integer().optional(),
    product_id: Joi.number().integer().optional(),
    update_at: Joi.date().iso().required().messages({
        'date.base': 'Update date must be a valid ISO date',
        'any.required': 'Update date is required'
    }),
    id: Joi.number().integer().required().messages({
        'number.base': 'Wishlist ID must be a number',
        'number.integer': 'Wishlist ID must be an integer',
        'any.required': 'Wishlist ID is required'
    })
});
