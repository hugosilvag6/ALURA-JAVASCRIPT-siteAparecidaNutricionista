var filtra = document.querySelector("#filtrar-tabela");

filtra.addEventListener("input", function () {
    console.log(filtra.value);
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var nome = paciente.querySelector(".info-nome").textContent;
            var expressao = new RegExp(this.value, 'i');
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (let index = 0; index < pacientes.length; index++) {
            var paciente = pacientes[index]
            paciente.classList.remove("invisivel")
        }
    }
});
