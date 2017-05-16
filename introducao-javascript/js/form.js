//ADICIONA UM NOVO PACIENTE//
//debugger
var botao = document.querySelector("#adicionar-paciente"); //dentro do botao
botao.addEventListener("click", function(event) {
    event.preventDefault();

    //trazendo valor id = form
    var form = document.querySelector("#form-adiciona");
    //pega os valores dos campos digitado    
    var paciente = obtemPacienteFormulario(form);

    var pacienteTr = montaTr(paciente);
    // console.log(pacienteTr);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibiMensagemDeErro(erros);

        // var mensagemErro = document.querySelector("#mensagem-erro")
        // mensagemErro.textContent = erros;
        // console.log("Paciente Invalido");

        return;
    }
    // buscando info - tabelas
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    var mensagensErros = document.querySelector("#mensagens-erro");
    mensagensErros.innerHTML = "";
    //  console.log(pacienteTr);

});

// Objetos dos meus pacientes -- trazendo do formulario
function obtemPacienteFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
};

function exibiMensagemDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    //criando um forEach para criar um lista - ul
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;

        // inserindo dados
        ul.appendChild(li);
    });
};

//montando meus td
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("ïnfo-nome");
    nomeTd.textContent = paciente.nome;

    var pesoTd = document.createElement("td");
    pesoTd.classList.add("ïnfo-peso");
    pesoTd.textContent = paciente.peso;

    var alturaTd = document.createElement("td");
    alturaTd.classList.add("ïnfo-altura");
    alturaTd.textContent = paciente.altura;

    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("ïnfo-gordura");
    gorduraTd.textContent = paciente.gordura;

    var imcTd = document.createElement("td");
    imcTd.classList.add("ïnfo-imc");
    imcTd.textContent = paciente.imc;


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);



    return pacienteTr;
};

// function montarTd(dado, classe) {
//     var td = document.createrElement("td");
//     td.classList.add(classe);
//     td.textContent = dado;
//     return td;


// pacienteTr.appendChild(montarTd(paciente.nome, "ïnfo-nome"));
// pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
// pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
// pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
// pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

// };

function validaPaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O Nome não pode ser em branco! ");
        continue;
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("O Peso é invalido")
        continue;
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("O altura é invalido")
        continue;
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura nao pode ser em branco! ");
        continue;
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso nao pode ser em Branco!");
        continue;
    }
    if (paciente.altura.length == 0) {
        erros.push("O peso nao pode ser em Branco!");
        continue;
    }
    return erros;
};
