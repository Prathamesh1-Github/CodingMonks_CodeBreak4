const fast2sms = require('fast-two-sms')
const express = require('express')
const router = express.Router()

require('dotenv').config();

router.post('/sendMessage', async (req, res) => {
    const {user:{userId}, params:{mobileNo:mobileN}} = req
    const response = await fast2sms.sendMessage({authorization : process.env.API_KEY, message : "req.body.message", numbers : [{mobileN}]})
    res.send(response)
})