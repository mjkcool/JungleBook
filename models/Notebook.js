const mongoose = require('mongoose')

const NotebookSchema = new mongoose.Schema({
    text: { type: String }

})

const Notebook = mongoose.model('notebooks', NotebookSchema)
module.exports = Notebook