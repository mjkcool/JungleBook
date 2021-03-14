const express = require('express')
const router = express.Router()


const VisitorController = require('../controllers/VisitorController')

router.get('/', VisitorController.index) //get home
router.post('/show', VisitorController.show)
router.post('/store', VisitorController.store)

module.exports = router

