const { response } = require('express')
const Notebook = require('../models/Notebook')

const index = (req, res) => {
    return res.render('index')
}

//Show the list of Notebooks
const viewall = (req, res) => {
    return Notebook.find()
    .then(response=>{
        res.render('notebook', {notebooks:response})
    })
    .catch(error => {
        console.log(error)
    })

}

const show = (req, res, next) => {
    return res.send(req.params.name)
}


//Show single visitor
/*
const show = (req, res, next) => {
    let visitorID = req.body.visitorID
    Visitor.findById(visitorID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}
*/

const create = (req, res, next) => {
    //let notebook = new Notebook(req.body)
    alert(req.query)
    return res.send(req.query.name)
}

const insert = (req, res, next) => {
    console.log('add Visitor text POST '+req.body.text)
    console.log(req.body)
    let notebook = new Notebook(req.body)
    return notebook.save()
    .then(response => {
        res.redirect('/all')
    })
    .catch(error => {
        res.json({
            message: '방명록 등록에 실패하였습니다'
        })
    })
}

module.exports = {
    index, insert, show, viewall, create
}