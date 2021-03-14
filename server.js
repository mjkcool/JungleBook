const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const VisitorRoute = require('./routes/visitor')
mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection

db.on('error', (err)=>{
  console.log(err)
})

db.once('open', ()=>{
  console.log('DB Connection Established!');
})

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
const hostname = 'localhost'

app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`)
})

app.use('/api/visitor', VisitorRoute)

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/hallway', (request, response) => {
  response.send('복도입니다.')
})