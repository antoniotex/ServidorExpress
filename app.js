//Recupera biblioteeca express e executa função recuperada
var express = require('express');
var app = express();
// fim

//informa para o EXPRESS que o EJS será o motor de views
app.set('view engine', 'ejs')

app.get('/tecnologia', function(req, res){
	res.render('secao/tecnologia');
});

app.get('/moda', function(req, res){
	res.render('secao/moda');
});

app.get('/carros', function(req, res){
	res.render('secao/carros');
});


//Fica escutando requisição da porta 3000 e foi passado uma função de callback para confirmar que o servidor subiu
app.listen(3000, function(){
	console.log('Servidor rodando com Express');
})