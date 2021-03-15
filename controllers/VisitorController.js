const { response } = require('express')
const Visitor = require('../models/Visitor')

//Show the list of Visitors
const index = (req, res) => {
    return Visitor.find()
    .then(response=>{
        let index = fs.readFileSync('../views/index.ejs', 'utf8')
        //03.15
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

const insert = (req, res) => {
    let visitor = new Visitor(req.body)
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
    index, insert
}