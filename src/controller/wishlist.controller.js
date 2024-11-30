import { logger } from '../utils/logger.utils.js';
import * as wishlistService from '../service/wishlist.service.js';

export const getAllWhishlist = async (req, res) => {
    try {
        const result = await wishlistService.getAllWhishlists();
        res.status(200).send(result);
    } catch (error) {
        logger.error(error.message);
        res.status(400).send({ error: error.message });
    }
};

export const getWhishlistById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await wishlistService.getWhishlistById(id);
        res.status(200).send(result);
    } catch (error) {
        logger.error(error.message);
        res.status(400).send({ error: error.message });
    }
};

export const createWhishlist = async (req, res) => {
    try {
        const { user_id, product_id, create_at, update_at } = req.body;
        const result = await wishlistService.createWhishlist({
            user_id,
            product_id,
            create_at,
            update_at
        });
        res.status(201).send(result);
    } catch (error) {
        logger.error(error.message);
        res.status(400).send({ error: error.message });
    }
};

export const updateWhishlist = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, product_id, update_at } = req.body;
        const result = await wishlistService.updateWhishlist(id, {
            user_id,
            product_id,
            update_at
        });
        res.status(200).send(result);
    } catch (error) {
        logger.error(error.message);
        res.status(400).send({ error: error.message });
    }
};

export const deleteWhishlist = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await wishlistService.deleteWhishlist(id);
        res.status(200).send(result);
    } catch (error) {
        logger.error(error.message);
        res.status(400).send({ error: error.message });
    }
};
