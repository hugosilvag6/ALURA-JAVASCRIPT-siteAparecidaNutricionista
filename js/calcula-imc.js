// muda o título da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var pesoValido = validaPeso(peso);

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var alturaValida = validaAltura(altura);

    var tdImc = paciente.querySelector(".info-imc");

    if (!pesoValido) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaValida) {
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso > 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura){
    if (altura > 0 && altura < 3){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imcCalculado = peso / (altura * altura);
    return imcCalculado.toFixed(2);
}
