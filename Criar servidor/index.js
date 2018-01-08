var http = require('http');

var server = http.createServer( function(req, res){

	var cat = req.url;
	if(cat == '/moda'){
		res.end("<html><head><title>Olá Mundo</title></head><body><h1>Portal de Moda</h1></body></html>");
	}
	if(cat == '/carros'){
		res.end("<html><head><title>Olá Mundo</title></head><body><h1>Portal de Carros</h1></body></html>");
	}
	res.end("<html><head><title>Olá Mundo</title></head><body><h1>Portal de noticias</h1></body></html>");

});

server.listen(3000);