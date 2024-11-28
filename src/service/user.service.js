import { db } from '../database/index.database.js'
import { generateHashPassword } from '../helpers/hashing.js'
import { otpGenerator } from '../helpers/onetimepwd.js'
import { sendMail } from '../helpers/sendEmail.js'

export const registerUserService = async (userData) => {
    try {
        const { username, password } = userData

        const user = await db('users').where('username', username).first()
        if (user) {
            throw new Error('User already exists')
        }

        const otp = otpGenerator()
        await sendMail(
            userData.email,
            'Your one-time password',
            `<h1><b>YOUR ONE TIME PASSWORD IS => ${otp}</b></h1>`,
        )

        const newPassword = await generateHashPassword(password)

        const [userId] = await db('users')
            .insert({ ...userData, password: newPassword })
            .returning('id')
        
        const check = await createOtp(otp, userId.id)

        if (check.isTrue) {
            return { success: true, userId }
        }

        return { success: false, error: check.error }
    } catch (error) {
        console.error(error.message)
        return { success: false, error: error.message }
    }
}

export const loginUserService = async (userData) => {
    try {
    } catch (error) {
        return { success: true, error }
    }
}

const createOtp = async (otp_code, user_id) => {
    try {
        await db('otp').insert({ otp_code, user_id })
        return { isTrue: true }
    } catch (error) {
        return { isTrue: false, error: error }
    }
}
