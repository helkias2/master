function ProdutosDAO(connection){
	this._connection = connection;
};

ProdutosDAO.prototype.lista = function(callback){
	this._connection.query('SELECT * FROM produtos', callback);
};

//ProdutosDAO.prototype.salva = function (produto, callback) {
//    this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)',  [produto.titulo, produto.preco, produto.descricao], callback);
//};

 ProdutosDAO.prototype.salva = function(produto,callback){
 	this._connection.query('INSERT INTO produtos SET ?', produto,callback);
 };

 module.exports = function(){
 	return ProdutosDAO;
};


// module.exports = function(){
// 	return function(connection){
// 	    this.lista = function(callback){
// 	      connection.query('select * from produtos', callback);
// 	    };

// 	    return this;
// 	};
// };
