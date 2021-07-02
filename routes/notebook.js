const express = require('express')
const router = express.Router()
const NotebookController = require('../controllers/NotebookController')

router.route('/').get(NotebookController.index)

// View notebook
router.route('/:name')
.get(NotebookController.show) // Show all
.post(NotebookController.addWord) // Add a word

// Create new notebook
router.route('/create/:name').get(NotebookController.create)

// Delete word using _id
router.route('/:name/delete/:id').get(NotebookController.deleteWord)

module.exports = router