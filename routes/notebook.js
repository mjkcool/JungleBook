const express = require('express')
const router = express.Router()
const NotebookController = require('../controllers/NotebookController')

router.route('/').get(NotebookController.index)

router.route('/:name')
.get(NotebookController.show)
.post(NotebookController.addWord)

router.route('/create/:name').get(NotebookController.create)

router.route('/:name/delete/:id').get(NotebookController.deleteWord)

module.exports = router