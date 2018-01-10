var app = require('./config/server');

//Fica escutando requisição da porta 3000 e foi passado uma função de callback para confirmar que o servidor subiu
app.listen(3000, function(){
	console.log('Server run with Express');
})