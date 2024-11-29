import { Router } from 'express';
import {
    getAllCategories,
    getOneCategoryById,
    createCategories,
    updateCategories,
    deleteCategory,
} from '../controller/category.controller.js';

import { 
    checkCategoryDataMiddleware, 
    updateCategoryDataMiddleware 
} from '../middlewares/categoryMiddleware.js';

import { categorySchema } from '../schemas/categorySchema.js';

export const categoryRouter = Router();

categoryRouter.get('/all', getAllCategories);
categoryRouter.get('/all/:id', getOneCategoryById);
categoryRouter.post('/new', checkCategoryDataMiddleware(categorySchema), createCategories);
categoryRouter.put('/update/:id', updateCategoryDataMiddleware(categorySchema), updateCategories);
categoryRouter.delete('/delete/:id', deleteCategory);

export default categoryRouter;
