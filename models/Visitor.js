const mongoose = require('mongoose')
const ejs = require('ejs')
const fs = require('fs')
mongoose.connect('mongodb://minjeong:jenny8100@localhost:27017/visitorbook', {useNewUrlParser:true, useUnifiedTopology:true})

const VisitorSchema = new mongoose.Schema({
    text: { type: String }}, {timestamps: true})

const Visitor = mongoose.model('visitor', VisitorSchema)
const conn = mongoose.connection

conn.on('error', (err)=>{
    console.log(err)
})
    conn.once('open', ()=>{
    console.log('DB Connection Established!')
})
conn.on('error', console.error.bind(console, 'connection error:'))
  

module.exports = Visitor