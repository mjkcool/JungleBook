const mongoose = require('mongoose')
const { Schema } = mongoose;

const NotebookSchema = new Schema({
    name: { type: String, required: true, lowercase: true, unique: true },
    words: { type: {word: String, meaning: String, description: String}, default: []},
    createDate: { type: Date, required: true, default: Date.now }
})

const Notebook = mongoose.model('notebooks', NotebookSchema)
module.exports = Notebook