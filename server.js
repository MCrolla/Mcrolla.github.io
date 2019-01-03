var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.listen(3000, function () {
    console.log('todo app on port 3000');
  });
  
  app.use(express.static('public'));