//minha connection com banco
var mysql = require('mysql');

function createDBConnection(){
      return mysql.createConnection({
              host : 'localhost',
              user : 'root',
              password : 'new-pass',
              database : 'casadocodigo'
  });
};
//wrapper
module.exports = function() { 
	return createDBConnection; 
};
