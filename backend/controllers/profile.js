const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')

const getProfileInfo = async(req, res) => {
    const userDetails = await User.find({_id: req.user.userId})
    console.log(userDetails)
    res.status(StatusCodes.OK).json(userDetails)
}

const getProfileInfoById = async(req, res) => {
    const {user:{userId}, params:{id:findUserId}} = req
    const user = await User.findOne({
        userId:  findUserId
    })

    if(!user) {
        throw new NotFoundError(`No ride with id ${findUserId}`)
    }

    res.status(StatusCodes.OK).json(user)
}

module.exports = {
    getProfileInfo,
    getProfileInfoById
}