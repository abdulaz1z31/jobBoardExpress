import { db } from '../database/index.database.js'

export const getAllCompanyService = async ({skip, limit}) => {
    try {
        const data = await db.select('*').from('companies').offset(skip).limit(limit)
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
export const searchCompanyService = async () => {
    try {
        
    } catch (error) {
        return {success:false, error}
    }
}
export const createCompanyService = async (body) => {
    try {
        console.log(body)
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
export const sendNotificatonUser = async () => {
    try {
       //bunga biriktirilgan category_id orqli userga borib shu userga xat 
    } catch (error) {
        return {isSended:false, error}
    }
}
export const updateCompanyService = async (id, body) => {
    try {
        const data = await db('companies')
            .where('id', id)
            .update(body)
            .returning('*')
        if (!data[0]) {
            throw new Error('Error')
        }
        // console.log(data);
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteCompanyService = async (id) => {
    try {
        console.log(id)
        const data = await db('companies').where('id', id).del().returning('*')
        console.log(data)
        if (!data) {
            throw new Error('Error')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
