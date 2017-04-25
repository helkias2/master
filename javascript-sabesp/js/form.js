//ADICIONA UM NOVO PACIENTE
var botao = document.querySelector("#adicionar-cliente"); //dentro do botao
botao.addEventListener("click", function(event) {
    event.preventDefault();

    //trazendo valor id = formulario
    var form = document.querySelector("#form-adiciona");

    //pegando os valores do HTML na tag = from
    var cliente = obtemClienteFormulario(form);

    //Montando o meu Tr da minha Tabela.
    var clienteTr = montaTr(cliente);

    //Validando os campos
    var erros = validaCliente(cliente);

    if (erros.length > 0) {
        exibiMensagemDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-clientes");
    tabela.appendChild(clienteTr);

    form.reset();

    var mensagensErros = document.querySelector("#mensagens-erro");
    mensagensErros.innerHTML = "";
});
//Objeto
function obtemClienteFormulario(form) {
    var cliente = {
        nome: form.nome.value,
        rgi: form.rgi.value,
        data: form.data.value,
        faixaConsumo: validaFaixa(consumoMetro.value),
        consumoMetro: form.consumoMetro.value,
        total: validaCota(form.consumoMetro.value)
    }
    return cliente;
};

function exibiMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;

        ul.appendChild(li);
    });
};
//Monta tabela
function montaTr(cliente) {
    var clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("ïnfo-nome");
    nomeTd.textContent = cliente.nome;

    var rgiTd = document.createElement("td");
    rgiTd.classList.add("ïnfo-rgi");
    rgiTd.textContent = cliente.rgi;

    var dataTd = document.createElement("td");
    dataTd.classList.add("ïnfo-data");
    dataTd.textContent = cliente.data;

    var faixaConsumoTd = document.createElement("td");
    faixaConsumoTd.classList.add("ïnfo-faixaConsumo");
    faixaConsumoTd.textContent = cliente.faixaConsumo;

    var consumoMetroTd = document.createElement("td");
    consumoMetroTd.classList.add("ïnfo-consumoMetro");
    consumoMetroTd.textContent = cliente.consumoMetro;

    var totalTd = document.createElement("td");
    totalTd.classList.add("ïnfo-totalConta");
    totalTd.textContent = cliente.total;

    clienteTr.appendChild(nomeTd);
    clienteTr.appendChild(rgiTd);
    clienteTr.appendChild(dataTd);
    clienteTr.appendChild(faixaConsumoTd);
    clienteTr.appendChild(consumoMetroTd);
    clienteTr.appendChild(totalTd);

    return clienteTr;
};

function validaCliente(cliente) {
    var erros = [];
    if (cliente.nome.length == 0) {
        erros.push("O Nome não pode ser em branco! ");
    }
    if (cliente.consumoMetro.length == 0) {
        erros.push("A Consumo m3 nao pode ser em branco! ");
    }
    if (cliente.data.length == 0) {
        erros.push("O Data nao pode ser em Branco!");
    }
    if (cliente.rgi.length == 0) {
        erros.push("O rgi nao pode ser em Branco!");
    }
    return erros;
};
