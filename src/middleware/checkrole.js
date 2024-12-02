import { logger } from '../utils/index.utils.js'

export const roleGuard = (...roles) => {
    return async (req, res, next) => {
        try {
            const userRole = req.user.role
            if (roles.includes(userRole)) {
                next()
            } else {
                logger.error('Permission Denied')
                res.status(403).send('Permission Denied')
            }
        } catch (error) {
            logger.error('Server Error')
            res.status(500).send({
                status: 'Server error',
                error,
            })
        }
    }
}

export const adminOrSelf = (...roles) => {
    return async (req, res, next) => {
        try {
            const userRole = req.user.role
            const id = req.params.id
            const userId = req.user?.id
            if (roles.includes(userRole) || id == userId) {
                if (userRole != 'admin') {
                    req.body.role = userRole
                }
                next()
            } else {
                logger.error('Permission Denied')
                res.status(403).send('Permission Denied')
            }
        } catch (error) {
            logger.error('Server Error')
            res.status(500).send({
                status: 'Server error',
                error,
            })
        }
    }
}
