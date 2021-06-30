const mongoose = require('mongoose')
const { Schema } = mongoose;

const wordSchema = new Schema({
    word:{ type: String, required: true },
    meaning: String,
    description: String
})

const NotebookSchema = new Schema({
    name: { type: String, required: true, lowercase: true },
    words: { type: [wordSchema], default: []},
    createDate: { type: Date, required: true, default: Date.now }
})

const Notebook = mongoose.model('notebooks', NotebookSchema)
module.exports = Notebook