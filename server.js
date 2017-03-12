const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  response.redirect('admin.html')
});

app.get('/callea', (request, response) => {
  response.redirect('callea.html')
});

app.get('/calleb', (request, response) => {
  response.redirect('calleb.html')
});

app.post('/config', (request, response) => {
  var config = request.body;
  config.callea = config.callea + '000';
  config.calleb = config.calleb + '000';
  config.callea = parseInt(config.callea)
  config.calleb = parseInt(config.calleb)
  config = JSON.stringify(config);
  fs.writeFile('./public/config.json', config)
});

app.listen(port, () => console.log('App running on port 3000'));
