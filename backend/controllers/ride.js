const Ride = require('../models/Ride')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getAllWorldRides = async (req, res) => {
    const {startLocation, destination, date, sort} = req.query
    const queryObject = {}
    if(startLocation){
        queryObject.startLocation = { $regex: startLocation, $options: 'i'}
    }
    if(destination){
        queryObject.destination = { $regex: destination, $options: 'i'}
    }
    if(date){
        queryObject.date = { $regex: date, $options: 'i'}
    }
    let result = Ride.find(queryObject)
    // const rides = await Ride.find().sort({createdAt:-1})
    if(sort){
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    }
    else{
        result = result.sort({createdAt:-1})
    }
    const rides = await result

    res.status(StatusCodes.OK).json(rides)
}

const getAllRides = async (req, res) => {
    const rides = await Ride.find({createdBy: req.user.userId}).sort('createdAt').sort({createdAt:-1})
    res.status(StatusCodes.OK).json({rides, count: rides.length})
}

const getRide = async (req, res) => {
    const {user:{userId}, params:{id:rideId}} = req

    const ride = await Ride.findOne({
        // _id:rideId, createdBy:userId
        _id:rideId
    })

    if(!ride) {
        throw new NotFoundError(`No ride with id ${rideId}`)
    }

    res.status(StatusCodes.OK).json(ride)
}

const createRide = async (req, res) => {
    // first we will get the user id who has created the ride
    req.body.createdBy = req.user.userId
    req.body.createdByName = req.user.name
    req.body.mobileNo = req.user.mobileNo
    console.log(req.user.name)
    console.log(req.user.mobileNo)
    const ride = await Ride.create(req.body)
    res.status(StatusCodes.CREATED).json({ride})
}


const updateRide = async (req, res) => {
    const {
        body: {startLocation, destination, date, time, car, carNumber, createdBy},
        user: {userId},
        params: {id:rideId}
    } = req

    if(startLocation==='' || destination==='' || date==='' || time==='' || car==='' || carNumber==='' || createdBy){
        throw new BadRequestError('Provide all the fields')
    }

    const ride = await Ride.findByIdAndUpdate(
        {_id:rideId, createdBy:userId}, 
        req.body, 
        {new:true, runValidators:true}
    )

    if(!ride) {
        throw new NotFoundError(`No ride with id ${rideId}`)
    }

    res.status(StatusCodes.OK).json({ride})

}

const deleteRide = async (req, res) => {
    const {
        user: {userId},
        params: {id:rideId}
    } = req

    const ride = await Ride.findByIdAndRemove(
        {_id:rideId, 
        createdBy:userId}
    )

    if(!ride) {
        throw new NotFoundError(`No ride with id ${rideId}`)
    }

    res.status(StatusCodes.OK).send('Ride deleted Successfully')
}

module.exports = {
    getAllRides,
    getRide,
    createRide,
    updateRide,
    deleteRide,

    getAllWorldRides
}

