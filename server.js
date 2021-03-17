const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const createError = require('http-errors')
const path = require('path')

const VisitorRoute = require('./routes/visitor')

const PORT = process.env.PORT || 3000
const hostname = 'localhost'

const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/static'));


mongoose.Promise = global.Promise
mongoose.connect('mongodb://minjeong:mirimminjeong2019@localhost:27017/visitorbook', {useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>console.log('DB connected'))
.catch((err)=>console.error(err))

app.use('/', VisitorRoute)

app.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`)
})