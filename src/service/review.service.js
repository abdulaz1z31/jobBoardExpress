import { db } from '../database/index.database.js'

export const getAllReviewService = async () => {
    try {
        const data = await db.select('*').from('review').returning('*')
        if (!data) {
            throw new Error('Error')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const getByIReviewService = async (id) => {
    try {
        const data = await db
            .select('*')
            .from('review')
            .returning('*')
            .where('id', '=', id)
            .returning('*')
        if (!data[0]) {
            throw new Error('Error')
        }
        return data[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const createReviewService = async (body) => {
    try {
        const newData = await db('review').insert({ ...body })
        if (!newData[0]) {
            throw new Error('Error')
        }
    } catch (error) {
        throw new Error(error)
    }
}
export const updateReviewService = async (id, body) => {
    try {
        const updateData = await db('review')
            .where('id', '=', id)
            .update(body)
            .returning('*')
        if (!updateData[0]) {
            throw new Error('Error')
        }
        return updateData[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteReviewService = async (id) => {
    try {
        const deleteData = await db('review').where('id', '=', id).del()
        if (!deleteData[0]) {
            throw new Error('Error')
        }
        return deleteData[0]
    } catch (error) {
        throw new Error(error)
    }
}
