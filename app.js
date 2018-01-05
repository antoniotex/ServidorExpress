var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('<html><head><title>Ola Mundo</title></head><bodybody style="color:grey;"><h1>Portal de noticias</h1></body></html>');
});

app.get('/tecnologia', function(req, res){
	res.send('<html><head><title>Ola Mundo</title></head><body style="color:red;"><h1>Portal de tecnologia</h1></body></html>');
});

app.get('/carros', function(req, res){
	res.send('<html><head><title>Ola Mundo</title></head><body style="color:green;"><h1>Portal de carros</h1></body></html>');
});

app.listen(3000, function(){
	console.log('Servidor rodando com Express');
})