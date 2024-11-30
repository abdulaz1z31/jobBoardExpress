import { db } from '../database/index.database.js'

export const getAllCompanyService = async () => {
    try {
        const data = await db.select('*').from('companies').returning('*')
        if (!data) {
            throw new Error('Error')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getByICompanyService = async (id) => {
    try {
        const data = await db.select('*').from('companies').where('id', '=', id)
        if (!data[0]) {
            throw new Error('Error')
        }
        return data[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const createCompanyService = async (body) => {
    try {
        const data = await db('companies')
            .insert({ ...body })
            .returning('*')
        if (!data[0]) {
            throw new Error('Error')
        }
        return data[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const updateCompanyService = async (id, body) => {
    try {
        const data = await db('companies').where('id', '=', id).update(body)
        if (data[0]) {
            throw new Error('Error')
        }
        return data[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteCompanyService = async (id) => {
    try {
        const data = await db('companies').where('id', '=', id).update(body)
        if (data[0]) {
            throw new Error('Error')
        }
        return data[0]
    } catch (error) {
        throw new Error(error)
    }
}
