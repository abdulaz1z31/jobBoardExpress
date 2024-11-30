import { Router } from 'express'
import {
    getAllWishlistsCon,
    getWishlistsByIdCon,
    createWishlistCon,
    updateWishlistCon,
    deleteWishlistCon,
} from '../controller/index.controller.js'
import { pagination, validationMiddleware } from '../middleware/index.middleware.js'
export const wishlistRouter = Router()

wishlistRouter.get('/', pagination, getAllWishlistsCon)
wishlistRouter.get('/:id', getWishlistsByIdCon)
wishlistRouter.post('/', createWishlistCon)
wishlistRouter.put('/:id', updateWishlistCon)
wishlistRouter.delete('/:id', deleteWishlistCon)
