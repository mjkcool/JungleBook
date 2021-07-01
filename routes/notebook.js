const express = require('express')
const router = express.Router()
const NotebookController = require('../controllers/NotebookController')

router.route('/').get(NotebookController.index)

//테스트용 전체 조회
router.route('/all')
.get(NotebookController.viewall) //get home
.post(NotebookController.insert)

//노트북 조회
router.route('/:name')
.get(NotebookController.show)
.post(NotebookController.addWord)

router.route('/create/:name').get(NotebookController.create)

router.route('/:name/delete/:word').get(NotebookController.deleteWord)

module.exports = router