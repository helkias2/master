// buscar-pacientes.js

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
console.log("Buscando pacientes...");
  //responsavel para fazer requesicoes
  var xhr = new XMLHttpRequest();

   xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
   xhr.send();

});
