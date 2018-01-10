var mysql = require('mysql');

var connMySql = function(){
		console.log('Connection db estabilshed');
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'portal_noticias'
		});
}

module.exports = function (){
	return connMySql;
}