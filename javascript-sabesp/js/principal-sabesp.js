//  CALCULA IMC
debugger
//-- >>>>> Selecionando (titulo no html) e inserindo um novo titulo
var titulo = document.querySelector(".titulo");
titulo.textContent = "Sistema Sabesp2";

//--->>>>> Selecionando todos os clientes da tabela
var clientes = document.querySelectorAll(".cliente");

// criando uma estrutura de repeticaos para conta quantos clientes tem na tabela
for (var i = 0; i < clientes.length; i++) {
    var cliente = clientes[i]; // passando para variavel cliente um array com todos os clientes

    var tdFaixaConsumo = cliente.querySelector(".info-faixaConsumo");//
    var faixaConsumo = tdFaixaConsumo.textContent;

    var tdConsumoMetros = cliente.querySelector(".info-consumoMetros");
    var consumoMetros = parseInt(tdConsumoMetros.textContent);

    var tdTotalConta = cliente.querySelector(".info-totalConta");

    var faixaConsumoEhValido = validaFaixa(consumoMetros);
    tdFaixaConsumo.textContent = faixaConsumoEhValido;

    var consumoMetrosEhValida = validaCota(consumoMetros);
    tdTotalConta.textContent = consumoMetrosEhValida;

function validaFaixa(consumoMetros){

    do{
      consumoMetros = parseInt(consumoMetros) - 10;
      if(consumoMetros <= 10){
        var faixaCons = "10";

      } else if(consumoMetros >=11 && consumoMetros <=20){
                var faixaCons = "11 A 20";

      }else if(consumoMetros >=21 && consumoMetros <=30){
                var faixaCons = "21 A 30";

      }else if(consumoMetros >=31 && consumoMetros <= 50){
                var faixaCons = "31 A 50";

      }else if(consumoMetros > 50){
                var faixaCons = "50";
      }

    }while(faixaCons =="");
      return faixaCons;
};

function validaCota(consumoMetros) {
  do{
        cota1= 22.38;
        cota2= 3.50;
        cota3= 8.75;
        cota4= 8.75;
        cora5= 9.64;

        consumoMetros = parseInt(consumoMetros) - 10;
       if(consumoMetros >= 0 && consumoMetros <= 10){
          var total1 = cota1;
          total1 = total1 * 2;

      }else if(consumoMetros >= 11 && consumoMetros <= 20){
             var consumo2 = consumoMetros;
             var total1 = cota1 + (cota2 *  consumo2);
             total1 = total1 * 2;

      }else if(consumoMetros >=21 && consumoMetros <=30){
             var consumo2 = consumoMetros;
             var total1 = cota1 + (cota3 *  consumo2);
             total1 = total1 * 2;

      } else if(consumoMetros >=31 && consumoMetros <=50 || consumoMetros > 50){
          var consumo2 = consumoMetros;
          total1 = cota1 + (cota4 *  consumo2);
          total1 = total1 * 2;

      } else if(consumoMetros >= 50){
         consumo2 = consumoMetros;
        var total1 = cota1 + (cota5 *  consumo2);
        total1 = total1 * 2;
     } else{
        //total1 = "";
         //("Não posso dividir por zero!");
    }
  }while (total1 == "");
      return total1;
   };
};
