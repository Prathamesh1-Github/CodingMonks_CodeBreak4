const express = require('express')
const router = express.Router()

const { getAllRides, getRide, createRide, updateRide, deleteRide,   getAllWorldRides } = require('../controllers/ride')

router.route('/').post(createRide).get(getAllRides)
router.route('/:id').get(getRide).delete(deleteRide).patch(updateRide)

router.route('/all/userrides').get(getAllWorldRides)

module.exports = router
