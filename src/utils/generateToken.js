import Admin from '../models/admin.model.js'
import User from '../models/user.model.js'
import ApiError from './ApiError.js'

export const generateRefreshAndAccessToken = async (id, rememberMe) => {
    try {
        const user = await User.findById(id)

        if (!rememberMe) {
            const accessToken = user.generateAccessTokenWithShortDuration()
            user.accessToken = accessToken
            await user.save({ validateBeforeSave: false })
            return { accessToken }
        }
        const accessToken = user.generateAccessToken()
        user.accessToken = accessToken

        await user.save({ validateBeforeSave: false })
        return { accessToken }
    } catch (error) {
        console.error(error)
    }
}

export const options = {
    httpOnly: true,
    secure: true,
    // domain: CLIENT_URL,
    SameSite: 'None'
}

export const generateAccessToken = async (id) => {
    const user = await User.findById(id)

    const accessToken = user.generateAccessToken()
    return { accessToken }
}

export const generateAdminRefreshAccessToken = async (id) => {
    const admin = await Admin.findById(id).select('accessToken')

    if (!admin) return next(new ApiError(400, 'Error while generating tokens'))

    const accessToken = admin.generateAccessToken()
    return { accessToken }
}

export const generateAdminAccessToken = async (id) => {
    try {
        const admin = await Admin.findById(id)

        const accessToken = admin.generateAccessToken()
        const refreshToken = admin.generateRefreshTokenWithLongDuration()

        admin.accessToken = accessToken
        admin.refreshToken = refreshToken
        await admin.save()

        return { accessToken, refreshToken }
    } catch (error) {
        console.error(`Error occur while generating the admin tokens`)
    }
}