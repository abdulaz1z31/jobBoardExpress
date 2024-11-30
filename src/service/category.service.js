import knex from '../knexInstance';

export const getAllCategoryService = async () => {
    return await knex('categories').select('*');
};

export const getOneCategoryByIdService = async (id) => {
    return await knex('categories').where('id', id).first();
};

export const createCategoryService = async (data) => {
    const { name, description, tag } = data;
    return await knex('categories')
        .insert({ name, description, tag })
        .returning('*');
};

export const updateCategoryService = async (id, data) => {
    const { name, description, tag } = data;
    return await knex('categories')
        .where('id', id)
        .update({ name, description, tag })
        .returning('*');
};

export const deleteCategoryService = async (id) => {
    return await knex('categories')
        .where('id', id)
        .del()
        .returning('*');
};
