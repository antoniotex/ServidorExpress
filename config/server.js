//Recupera biblioteeca express e executa função recuperada
var express = require('express');
var consign = require('consign');

var app = express();
// fim

//informa para o EXPRESS que o EJS será o motor de views
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.into(app);

module.exports = app;