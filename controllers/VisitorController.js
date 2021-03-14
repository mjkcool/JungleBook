const { response } = require('express')
const Visitor = require('../models/Visitor')

//Show the list of Visitors
const index = (req, res, next) => {
    Visitor.find()
    .then(response=>{
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

//Show single visitor
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

const store = (req, res, next) => {
    let visitor = new Visitor({
        text: req.body.name
    })
    visitor.save()
    .then(response => {
        res.json({
            message: 'Visitor added successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    index, show, store
}