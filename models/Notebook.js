const mongoose = require('mongoose')
const { Schema } = mongoose;

const wordSchema = new Schema({
    word:{ type: String, required: true },
    meaning: String,
    description: String
})

const NotebookSchema = new Schema({
    title: { type: String, required: true, unique: true, lowercase: true },
    wordlist: { type: [wordSchema], default: []},
    createDate: { type: Date, required: true, default: Date.now }
})

const Notebook = mongoose.model('notebooks', NotebookSchema)
module.exports = Notebook