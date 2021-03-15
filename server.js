const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const fs = require('fs')

const PORT = process.env.PORT || 3000
const hostname = 'localhost'

//--DB connection
/*
const conn = mongoose.connection

conn.on('error', (err)=>{
  console.log(err)
})
conn.once('open', ()=>{
  console.log('DB Connection Established!')
})
conn.on('error', console.error.bind(console, 'connection error:'))

module.exports = conn;
*/
//--end of DB connection

const app = express();

app.use(morgan('dev')) //for debugging
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

const VisitorRoute = require('./routes/visitor')

app.use(express.static('static'));
app.use('/api', VisitorRoute)


app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`)
})