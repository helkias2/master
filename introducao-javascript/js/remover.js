//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function() {

    event.target.parentNode.classList.add("fadeOut");

    event.target.parentNode.remove();
    setTimeout(function() {
        //event.target.parentNode.remove();

    }, 500);
});




// pacientes.forEach(function(paciente) {
//     //escutando o evento
//     paciente.addEventListener("dblclick", function() {

//         event.target.removeEventListener();
//         console.log("Fui clicando ");
//         //this.remove();
//     });
// });
