const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VisitorSchema = new Schema({
    text: {
        type: String
    }
}, {timestamps: true})

const Visitor = mongoose.model('Visitor', VisitorSchema)
module.exports = Visitor