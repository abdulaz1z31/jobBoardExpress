import { db } from '../database/index.database.js'
function checkData(data, errorMessage) {
    if (!data || data.length === 0) {
        throw new Error(errorMessage)
    }
}
export const getAllJoblistsService = async ({ skip, limit }) => {
    try {
        const data = await db
            .select('*')
            .from('joblisting')
            .offset(skip)
            .limit(limit)
        checkData(data, 'Joblists not found')
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}
export const getJoblistByIdService = async (id) => {
    try {
        const data = await db.select('*').from('joblisting').where('id', id)
        checkData(data[0], 'Joblist not found')
        return data[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
export const serachJobListService = async () => {
    try {
        
    } catch (error) {
        return {success:false, error}
    }
}
export const createJoblistService = async (body) => {
    try {
        const data = await db('joblisting')
            .insert({
                ...body
            })
            .returning('*')
            
        checkData(data[0], 'Joblist not created')
        return data[0]
    } catch (error) {
        throw new Error(`Failed to create joblist: ${error.message}`)
    }
}
export const sendNotification = async () => {
    try {
        //joblist orqli userga referal olib unga sms jonatish
    } catch (error) {
        return {isSended:false, error}
    }
}
export const updateJoblistService = async (id, body) => {
    try {
        const data = await db('joblisting')
            .update({
                ...body,
                requirements: JSON.stringify(body.requirements),
                salaryRange: JSON.stringify(body.salaryRange),
            })
            .where('id', id)
            .returning('*')
        checkData(data[0], 'Joblist not updated')
        return data[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
export const deleteJoblistService = async (id) => {
    try {
        const data = await db('joblisting').where('id', id).del().returning('*')
        checkData(data[0], 'Joblist not deleted')
        return data[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
