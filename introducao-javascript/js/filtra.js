//debugger
var campoFiltro = document.querySelector("#filtrar-tabela");

//para escutar campos 
campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //console.log(nome);
            var expressao = new RegExp(this.value, "i");
            debugger
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("ïnvisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("ïnvisivel");
        }
    }

});