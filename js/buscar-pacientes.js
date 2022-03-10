var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            var pacientes = JSON.parse(response);

            pacientes.forEach(function (paciente) {
                insereNaTabela(paciente);
            });
        } else {
            var erro = document.querySelector("#erro-ajax");
            erro.classList.remove("invisivel");
            erro.textContent = `Erro: ${xhr.status} | ${xhr.responseText}`;
        }
    });
});
