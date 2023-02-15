const express = require('express')
const router = express.Router()

const {getProfileInfo} = require('../controllers/profile')

router.route('/profile').get(getProfileInfo)

module.exports = router