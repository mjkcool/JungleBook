const express = require('express')
const router = express.Router()
const VisitorController = require('../controllers/VisitorController')

router.route('/')
.get(VisitorController.index) //get home
.post(VisitorController.insert)
//router.post('/insert', )

module.exports = router