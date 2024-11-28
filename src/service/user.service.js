import { db } from '../database/index.database.js'
import {
    comparePassword,
    generateHashPassword,
    createTokens,
    otpGenerator,
    sendMail,
    verifyTokens,
} from '../helpers/index.helpers.js'

export const registerUserService = async (userData) => {
    try {
        const { username, password } = userData

        const user = await db('users').where('username', username)
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
export const verifyUserService = async (userData) => {
    try {
        const { user_id, otp_code } = userData
        const { isExists, error, otp } = await findOtpById(user_id)

        if (!isExists) {
            return { success: false, error }
        }
        if (otp.otp_code != otp_code) {
            throw new Error('Otp is not valid')
        }
        const { isUpdated, err } = await updateUserStatus(user_id)

        if (!isUpdated) {
            throw new Error(err)
        }
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}
export const loginUserService = async (userData) => {
    try {
        const { email, password } = userData
        const [user] = await db('users').select('*').where('email', email)

        if (!user) {
            throw new Error('User not found')
        }
        const isEqualPassword = await comparePassword(password, user.password)
        if (!isEqualPassword) {
            throw new Error('Email or password not valid')
        }
        const payload = {
            id: user.id,
            username: user.username,
            email,
            role: user.role,
        }
        const token = await createTokens(payload)
        return { success: true, token }
    } catch (error) {
        return { success: false, error }
    }
}
export const getUserProfileService = async (userData) => {
    try {
        const { username } = userData

        const user = await db('users').select('*').where('username', username)

        if (!user) {
            throw new Error('User not found')
        }
        delete user.password
        return { success: true, user }
    } catch (error) {
        return { success: false, error }
    }
}
export const updateTokenService = async (refreshToken) => {
    const decode = verifyTokens('refresh', refreshToken)
    delete decode.exp
    const token = await createTokens(decode)
    return token
}
export const forgetPasswordService = async (userData) => {
    try {
        const { email, id } = userData
        const [user] = await db('users').select('*').where('email', email)
        if (!user) {
            throw new Error('User not found')
        }
        const otp = otpGenerator()
        const result = await updateOtp(id, otp)
        const { isUpdated, error } = result
        
        if (!isUpdated) {
            return { success: false, error }
        }
        
        await sendMail(
            email,
            'Otp for change password',
            `<p><b>This key for updating your password: ${otp}</b></p>
            <p>"http://localhost:3000/api/v1/auth/change/password/${userData.id}"</p>`
        )
        
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}
export const changePasswordService = async (data, userId) => {
    try {
        const {newPassword, userOtp} = data
        const otpData = await findOtpById(userId)
        if (userOtp != otpData.otp_code) {
            throw new Error("Otp code not valid");
        }
        const hashPassword = await generateHashPassword(newPassword)
        const result = await updateUserPassword(userId, hashPassword)
        const {isUpdated, error} = result
        
        if (!isUpdated) {
            return {success:false, error}
        }
        return {success:true}
    } catch (error) {
        return {success:true, error}
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
const findOtpById = async (user_id) => {
    try {
        const [otp] = await db
            .select('*')
            .from('otp')
            .where('user_id', '=', user_id)
        if (Object.keys(otp).length == 0) {
            throw new Error('Invalid user id')
        }
        return { isExists: true, otp }
    } catch (error) {
        return { isExists: true, error }
    }
}
const updateUserStatus = async (userId) => {
    try {
        await db('users').where('id', userId).update({ status: 'active' })
        return { isUpdated: true }
    } catch (err) {
        return { isUpdated: false, err }
    }
}
const updateOtp = async (user_id, otp_code) => {
    try {
        await db('otp').where('user_id', user_id).update({ otp_code })
        return { isUpdated: true }
    } catch (error) {
        return { isUPdated: false, error }
    }
}
const updateUserPassword = async (userId, hashPassword) => {
    try {
        await db('users').where('id', userId).update({ password: hashPassword })
        return { isUpdated: true }
    } catch (err) {
        return { isUpdated: false, err }
    }
}