import { deleteUserByIdService, getAllUsersService, getUserByIdService, updateUserByIdService } from "../service/index.service.js"
import { statusCode } from "../utils/statuscodes.js"

export const getAllUsers = async (req, res, next) => {
    try {
        const {error, success, users} = await getAllUsersService()
        if (success) {  
            return res.status(statusCode.OK).send({
                message:"success",
                users 
            })
        }
        return res.stataus(statusCode.INTERNAL_SERVER_ERROR).send({
            message:"Fail",
            error:error.message
        })
    } catch (error) {
        next(error)
    }
}
export const getUserById = async (req, res, next) => {
    try {
        const {success, user, error} = await getUserByIdService(req.params.id)
        if (success) {
            return res.status(statusCode.OK).send({
                message:"Success",
                user
            })
        }
        return res.stataus(statusCode.BAD_REQUEST).send({
            message : "Fail",
            error:error.message
        })
    } catch (error) {
        next(error)
    }
}
export const updateUserById = async (req, res, next) => {
    try {
        const { success, error, newUser } = await updateUserByIdService(req.params.id, req.body)
        if (success) {
            return res.status(statusCode.OK).send({
                message:"updated",
                user : newUser
            })
        }
        return res.stataus(statusCode.BAD_REQUEST).send({
            message:"fail",
            error:error.message
        })
    } catch (error) {
        next(error)
    }
}
export const deleteUserById = async (req, res, next) => {
    try {
        const {success, error} = await deleteUserByIdService(req.params.id)
        if (success) {
            return res.status(statusCode.OK).send({
                message:"deleted"
            })
        }
        return res.stataus(statusCode.BAD_REQUEST).send({
            message:"fail",
            error:error.message
        })
    } catch (error) {
        next(error)
    }
}