import { Router } from 'express'
import {
    getAllWishlistsCon,
    getWishlistsByIdCon,
    createWishlistCon,
    updateWishlistCon,
    deleteWishlistCon,
} from '../controller/index.controller.js'
import { validationMiddleware } from '../middleware/index.middleware.js'
export const wishlistRouter = Router()

wishlistRouter.get('/', getAllWishlistsCon)
wishlistRouter.get('/:id', getWishlistsByIdCon)
wishlistRouter.post('/', createWishlistCon)
wishlistRouter.put('/:id', updateWishlistCon)
wishlistRouter.delete('/:id', deleteWishlistCon)
