const express = require('express')
const router = express.Router()
const NotebookController = require('../controllers/NotebookController')

router.route('/').get(NotebookController.index)

//테스트용 전체 조회
router.route('/all')
.get(NotebookController.viewall) //get home
.post(NotebookController.insert)
//router.post('/insert', )

//노트북 조회
router.route('/:name').get(NotebookController.show)

router.route('/create').get(NotebookController.create)


module.exports = router