const express = require('express');
const app = express();

const hostname = 'localhost', port = '3000';

app.listen(3000, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
})

app.get('/hallway', (request, response) => {
  response.send('복도입니다.');
})