const express = require('express')
const router = express.Router()
const NotebookController = require('../controllers/NotebookController')

router.route('/').get(NotebookController.index)

router.route('/all')
.get(NotebookController.viewall) //get home
.post(NotebookController.insert)
//router.post('/insert', )

router.route('/:name').get(NotebookController.show)


module.exports = router