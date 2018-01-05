//Recupera biblioteeca express e executa função recuperada
var express = require('express');
var app = express();
// fim

//informa para o EXPRESS que o EJS será o motor de views
app.set('view engine', 'ejs')

app.get('/formulario_inclusao_noticia', function(req, res){
	res.render('admin/form_add_noticia');
});

app.get('/', function(req, res){
	res.render('home/index');
});

app.get('/noticias', function(req, res){
	res.render('noticias/noticias');
});


//Fica escutando requisição da porta 3000 e foi passado uma função de callback para confirmar que o servidor subiu
app.listen(3000, function(){
	console.log('Servidor rodando com Express');
})