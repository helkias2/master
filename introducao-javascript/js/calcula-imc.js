var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    };

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido"); ///trazendo as cores do css
    };

    if (pesoEhValido && alturaEhValida) {
        var imc = calcularImc(peso, altura);
        tdImc.textContent = imc;
    };

    function calcularImc(peso, alturA) {
        var imc = 0;
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    };

    function validaPeso(peso) {
        if (peso >= 0 && peso < 1000) {
            return true;
        } else {
            return false;
        }
    };

    function validaAltura(altura) {
        if (altura >= 0 && altura < 3.0) {
            return true;
        } else {
            return false;
        }
    };
};

// var botao = document.querySelector("#adicionar-paciente"); //dentro do botao
// botao.addEventListener("click", function(event) {
//     event.preventDefault();

//     var form = document.querySelector("#form-adiciona"); //trazendo valor id = form

//     var nome = form.nome.value; //pega os valores dos campos digitado.
//     var peso = form.peso.value; //
//     var altura = form.altura.value;
//     var gordura = form.gordura.value;

//     var pacienteTr = document.createElement("tr"); //pegando os valor de tr

//     var nomeTd = document.createElement("td");
//     var pesoTd = document.createElement("td");
//     var alturaTd = document.createElement("td");
//     var gorduraTd = document.createElement("td");
//     var imcTd = document.createElement("td");

//     nomeTd.textContent = nome;
//     pesoTd.textContent = peso;
//     alturaTd.textContent = altura;
//     gorduraTd.textContent = gordura;

//     pacienteTr.appendChild(nomeTd);
//     pacienteTr.appendChild(pesoTd);
//     pacienteTr.appendChild(alturaTd);
//     pacienteTr.appendChild(gorduraTd);

//     var tabela = document.querySelector("#tabela-pacientes");
//     tabela.appendChild(pacienteTr);


//     console.log(pacienteTr);



// })