const { response } = require('express')
const Notebook = require('../models/Notebook')

const ERR_MSG = "오류가 발생했습니다😥 잠시 후 다시 접속해주세요!"

const index = (req, res) => {
    return res.render('index')
}

//Show the list of Notebooks
const viewall = (req, res) => {
    return Notebook.find()
    .then(response=>{
        res.render('notebook-ex', {notebooks:response})
    })
    .catch(error => {
        console.log(error)
    })

}

const show = (req, res, next) => {
    let bookname = req.params.name
    return Notebook.find({name: bookname})
    .then(response=>{
        res.render('viewnotebook', {result:response})
    })
    .catch(error => {
        res.render("index")
    })
    //return res.render('viewnotebook', {result:req.params.name})
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
    let notebook = new Notebook({name: req.params.name, createDate: Date.now()})
    //return res.send(JSON.stringify(notebook))
    return notebook.save()
    .then(response => {
        res.redirect(`../${notebook.name}`)
    })
    .catch(err =>{
        //res.json({ message: err })
        
    })

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

const addWord = (req, res, next) => {
    // let wordset = {
    //     word: req.body.word,
    //     meaning: req.body.meaning,
    //     description: req.body.description
    // }
    let bookname = req.params.name
    
    let wordset = {
        word: req.body.word,
        meaning: req.body.meaning,
        description: req.body.description
    }

    return Notebook.findOneAndUpdate(
        { name: bookname }, 
        { $push: { words: wordset } }
    )
    .then(response => {
        res.redirect(`/${bookname}`)
    })
    .catch(error => {
        res.json({
            message: error
        })
    })
}

const deleteWord = (req, res, next) => {
    let bookname = req.params.name
    let id = req.params.id
    return Notebook.findOneAndUpdate(
        { name: bookname },
        { $pull: { words: { _id: id } } }
    )
    .then(response => {
        res.redirect(`/${bookname}`)
    })
    .catch(error => {
        res.json({
            message: error
        })
    })
}

module.exports = {
    index, insert, show, viewall, create, addWord, deleteWord
}