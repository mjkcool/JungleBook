const mongoose = require('mongoose')

const VisitorSchema = new mongoose.Schema({
    text: { type: String }})

const Visitor = mongoose.model('visitors', VisitorSchema)
module.exports = Visitor