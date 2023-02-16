const express = require('express')
const router = express.Router()

const {getProfileInfo, getProfileInfoById} = require('../controllers/profile')

router.route('/profile').get(getProfileInfo)
router.route('/profile/:id').get(getProfileInfoById)

module.exports = router