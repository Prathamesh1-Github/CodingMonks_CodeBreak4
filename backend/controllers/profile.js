const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')

const getProfileInfo = async(req, res) => {
    const userDetails = await User.find({_id: req.user.userId})
    console.log(userDetails)
    res.status(StatusCodes.OK).json(userDetails)
}

module.exports = {
    getProfileInfo
}