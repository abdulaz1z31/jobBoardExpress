import { Router } from 'express';
import {
    getAllWhishlist,
    getWhishlistById,
    createWhishlist,
    updateWhishlist,
    deleteWhishlist
} from '../controller/wishlist.controller.js';
import {
    checkWishlistDataMiddleware,
    updateWishlistDataMiddleware
} from '../middleware/wishlist.middleware.js';
import { wishlistSchema, updateWishlistSchema } from '../validations/wishlist.schema.js';

export const wishlistRouter = Router();

wishlistRouter.get('/all', getAllWhishlist);

wishlistRouter.get('/:id', getWhishlistById);

wishlistRouter.post('/new', checkWishlistDataMiddleware(wishlistSchema), createWhishlist);

wishlistRouter.put('/update/:id', updateWishlistDataMiddleware(updateWishlistSchema), updateWhishlist);

wishlistRouter.delete('/delete/:id', deleteWhishlist);

export default wishlistRouter;

