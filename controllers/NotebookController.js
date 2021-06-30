const { response } = require('express')
const Notebook = require('../models/Notebook')

//Show the list of Notebooks
const index = (req, res) => {
    return Notebook.find()
    .then(response=>{
        res.render('index.ejs', {notebooks:response})
    })
    .catch(error => {
        console.log(err)
    })

}

//Show single visitor
// const show = (req, res, next) => {
//     let visitorID = req.body.visitorID
//     Visitor.findById(visitorID)
//     .then(response => {
//         res.json({
//             response
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'An error Occured!'
//         })
//     })
// }

const insert = (req, res, next) => {
    console.log('add Visitor text POST '+req.body.text)
    console.log(req.body)
    let notebook = new Notebook(req.body)
    return notebook.save()
    .then(response => {
        res.redirect('/')
    })
    .catch(error => {
        res.json({
            message: '방명록 등록에 실패하였습니다'
        })
    })
}

module.exports = {
    index, insert
}