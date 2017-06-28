// fazendo um requisicao de express
const app = require('./config/express')(); 
//port
app.listen(3000,function(){
    //mensagem que esta rodando
    console.log("SERVIDOR RODANDO!");
});



