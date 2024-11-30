import {
    getAllCategoryService,
    getOneCategoryByIdService,
    createCategoryService,
    updateCategoryService,
    deleteCategoryService,
} from '../service/category.service';

export const getAllCategories = async (req, res, next) => {
    try {
        const allCategories = await getAllCategoryService();
        res.status(200).send({ status: 'ok', data: allCategories });
    } catch (error) {
        next(error);
    }
};

export const getOneCategoryById = async (req, res, next) => {
    try {
        const oneCategory = await getOneCategoryByIdService(req.params.id);
        res.status(200).send({ status: 'ok', data: oneCategory });
    } catch (error) {
        next(error);
    }
};

export const createCategories = async (req, res, next) => {
    try {
        const newCategory = await createCategoryService(req.body);
        res.status(201).send({ status: 'Created', data: newCategory });
    } catch (error) {
        next(error);
    }
};

export const updateCategories = async (req, res, next) => {
    try {
        const updatedData = await updateCategoryService(req.params.id, req.body);
        res.status(202).send({ status: 'Updated', data: updatedData });
    } catch (error) {
        next(error);
    }
};

export const deleteCategory = async (req, res, next) => {
    try {
        const deletedCategory = await deleteCategoryService(req.params.id);
        res.status(203).send({ status: 'deleted', data: deletedCategory });
    } catch (error) {
        next(error);
    }
};
