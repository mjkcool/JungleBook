const { response } = require('express')
const Notebook = require('../models/Notebook') // schema model

const ERR_MSG = "오류가 발생했습니다😥 잠시 후 다시 접속해주세요!"

// Backto index
const index = (req, res) => {
    return res.render('index')
}

// Open notebook from index
const show = (req, res, next) => {
    let bookname = req.params.name

    return Notebook.find({name: bookname})
    .then(response=>{
        res.render('viewnotebook', {result:response}) // move and render
    })
    .catch(err => {
        res.render("index")
    })
}

// Create Notebook from index
const create = (req, res, next) => {
    // Create schema model Object
    let notebook = new Notebook({name: req.params.name, createDate: Date.now()})
    
    return notebook.save()
    .then(response => {
        // Create and open
        res.redirect(`../${notebook.name}`)
    })
    .catch(err =>{
        res.json({ message: err })
    })

}

// Add a word from viewnotebook
const addWord = (req, res, next) => {
    let bookname = req.params.name
    let wordset = {
        word: req.body.word,
        meaning: req.body.meaning,
        description: req.body.description
    }

    return Notebook.findOneAndUpdate(
        { name: bookname }, // current notebook
        { $push: { words: wordset } } // Push word to wordlist
    )
    .then(response => {
        res.redirect(`/${bookname}`) // refresh
    })
    .catch(err => {
        res.json({ message: err })
    })
}

// delete word that seleted
const deleteWord = (req, res, next) => {
    let bookname = req.params.name
    let id = req.params.id // id of word that will delete

    return Notebook.findOneAndUpdate(
        { name: bookname }, // current notebook
        { $pull: { words: { _id: id } } }
    )
    .then(response => {
        res.redirect(`/${bookname}`) // refresh
    })
    .catch(err => {
        res.json({ message: err })
    })
}

module.exports = {
    index, show, create, addWord, deleteWord
}