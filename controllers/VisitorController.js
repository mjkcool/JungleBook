const { response } = require('express')
const Visitor = require('../models/Visitor')

//Show the list of Visitors
const index = (req, res) => {
    return Visitor.find()
    .then(response=>{
        res.render('index.ejs', {visitors:response})
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
    let visitor = new Visitor(req.body)
    return visitor.save()
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