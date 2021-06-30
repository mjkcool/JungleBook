const express = require('express')
const router = express.Router()
const NotebookController = require('../controllers/NotebookController')

router.route('/')
.get(NotebookController.index) //get home
.post(NotebookController.insert)
//router.post('/insert', )


module.exports = router