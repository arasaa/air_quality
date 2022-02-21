const express = require('express')
const router = express.Router()

//importing userRegister from userControllers
const {registerUser} = require('../controllers/userControllers')


router.route('/').post(registerUser)


module.exports = router;