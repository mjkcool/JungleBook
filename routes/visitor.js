const express = require('express')
const router = express.Router()

const VisitorController = require('../controllers/VisitorController')

router.get('/', VisitorController.index)
router.post('/show', VisitorController.show)
router.post('/store', VisitorController.store)

module.exports = router

