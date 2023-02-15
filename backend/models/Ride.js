const mongoose = require('mongoose')

const RideSchema = new mongoose.Schema({
    startLocation: {
        type: String,
        required: [true, 'Please provide the Starting Location'],
        maxlength: 50
    },
    destination: {
        type: String,
        required: [true, 'Please provide the Destination']
    },
    date: {
        type: Date,
        // YYYY-MM-DD
        required: [true, 'Please provide the Date']
    },
    time: {
        type: String,
        required: [true, 'Please provide the Date']
    },
    car: {
        type: String,
        required: [true, 'Please provide the Car']
    },
    carNumber: {
        type: String,
        required: [true, 'Please provide the Car Number']
    },
    prefferedLoad:{
        type: String,
    },
    price: {
        type: String,
        required: [true, 'Please provide Price']
    },
    // the createdBy helps us to know the specific ID of the user who has created the ride
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide User']
    },
}, 
    {timestamps: true}
)

// start location --> city
// end location --> city
// date
// time
// car
// carNumber

module.exports = mongoose.model('Ride', RideSchema)