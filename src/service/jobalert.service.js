import { db } from '../database/index.database.js'
function checkData(data, errorMessage) {
    if (!data || data.length === 0) {
        throw new Error(errorMessage)
    }
}
export const getAllJobAlertsService = async () => {
    try {
        const data = await db.select('*').from('jobalert')
        checkData(data, 'Jobalert not found')
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}
export const getJobAlertByIdService = async (id) => {
    try {
        const data = await db.select('*').from('jobalert').where('id', id)
        checkData(data[0], 'Jobalert not found')
        return data[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
export const createJobAlertService = async (body) => {
    try {
        const data = await db('jobalert')
            .insert({ ...body })
            .returning('*')
        checkData(data[0], 'Jobalert not created')
        return data[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
export const updateJobAlertService = async (id, body) => {
    try {
        const data = await db('jobalert')
            .update({ ...body })
            .where('id', id)
            .returning('*')
        checkData(data[0], 'Jobalert not updated')
        return data[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
export const deleteJobAlertService = async (id) => {
    try {
        const data = await db('jobalert').where('id', id).del().returning('*')
        checkData(data[0], 'Jobalert not deleted')
        return data[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
