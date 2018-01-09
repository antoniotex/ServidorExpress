
var app = require('./config/server');


//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

//var rotaHome = require('./app/routes/home');
//rotaHome(app);

//var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
//rotaFormularioInclusaoNoticia(app);

//Fica escutando requisição da porta 3000 e foi passado uma função de callback para confirmar que o servidor subiu
app.listen(3000, function(){
	console.log('Server run with Express');
})