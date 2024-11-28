import {
    loginUserService,
    registerUserService,
} from '../service/index.service.js'

export const registerUser = async (req, res, next) => {
    try {
        const result = await registerUserService(req.body)
        const { success, error, userId } = result

        if (success) {
            return res.status(201).send({
                message: 'Success',
                info: 'one time password sended to your email',
                userId,
            })
        }
        return res.status(409).send({
            message: 'Fail',
            error: error.message,
        })
    } catch (error) {
        next(error)
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const result = await loginUserService(req.body)
        const { success, error, token } = result
    } catch (error) {
        next(error)
    }
}
