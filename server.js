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

const db = require('./config/dbconfig.json')
mongoose.Promise = global.Promise
mongoose.connect(`mongodb+srv://${db.user}:${db.password}@${db.host}/${db.database}`, {useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>console.log('DB connected'))
.catch((err)=>console.error(err))

//mongodb+srv://mjkcool:<password>@notebook.u6oi4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use('/', VisitorRoute)

app.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`)
})