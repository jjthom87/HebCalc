var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var PORT = process.env.PORT || 3000;

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// make public a static dir
app.use(express.static('public'));

// Simple index route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/hebcal.html'));
});

// listen on port 3000
app.listen(PORT, function() {
  console.log('App running on port 3000!');
});