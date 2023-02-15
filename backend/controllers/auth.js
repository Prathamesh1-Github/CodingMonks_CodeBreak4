const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')

const register = async (req, res) => {
    const user = await User.create({...req.body})

    // *********** IMPORTANT *************
    // here the token is carrying id and name, so just come back to check if you want token to carry some more information
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user: {name:user.name}, token})
}

const login = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({email})

    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    // compare password
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJWT()

    console.log(token)

    res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: false
    })

    res.status(StatusCodes.OK).json({user: {name: user.name}, token})
}

module.exports = {
    register,
    login
}
