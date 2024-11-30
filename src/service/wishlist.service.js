import knex from '../database/knex.js';
import { logger } from '../utils/logger.utils.js';

/**
 *
 * @returns {Promise<Array>}
 */
export const getAllWhishlists = async () => {
    try {
        const result = await knex('whishlist').select('*');
        return result;
    } catch (error) {
        logger.error(error.message);
        throw new Error('Error fetching all wishlist items');
    }
};

/**
 *
 * @param {number} id
 * @returns {Promise<Object>}
 */
export const getWhishlistById = async (id) => {
    try {
        const result = await knex('whishlist').where({ id }).first();
        if (!result) {
            throw new Error('Wishlist item not found');
        }
        return result;
    } catch (error) {
        logger.error(error.message);
        throw new Error(error.message || 'Error fetching wishlist item');
    }
};

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export const createWhishlist = async (data) => {
    try {
        const { user_id, product_id, create_at, update_at } = data;
        const [newWhishlist] = await knex('whishlist')
            .insert({
                user_id,
                product_id,
                create_at,
                update_at
            })
            .returning('*');
        return newWhishlist;
    } catch (error) {
        logger.error(error.message);
        throw new Error('Error creating wishlist item');
    }
};

/**
 *
 * @param {number} id
 * @param {Object} data 
 * @returns {Promise<Object>}
 */
export const updateWhishlist = async (id, data) => {
    try {
        const { user_id, product_id, update_at } = data;
        const [updatedWhishlist] = await knex('whishlist')
            .where({ id })
            .update({
                user_id,
                product_id,
                update_at
            })
            .returning('*');
        if (!updatedWhishlist) {
            throw new Error('Wishlist item not found');
        }
        return updatedWhishlist;
    } catch (error) {
        logger.error(error.message);
        throw new Error('Error updating wishlist item');
    }
};

/**
 *
 * @param {number} id
 * @returns {Promise<Object>}
 */
export const deleteWhishlist = async (id) => {
    try {
        const [deletedWhishlist] = await knex('whishlist')
            .where({ id })
            .del()
            .returning('*');
        if (!deletedWhishlist) {
            throw new Error('Wishlist item not found');
        }
        return deletedWhishlist;
    } catch (error) {
        logger.error(error.message);
        throw new Error('Error deleting wishlist item');
    }
};
