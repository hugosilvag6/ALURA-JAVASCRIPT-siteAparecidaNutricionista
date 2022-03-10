var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", botaoHandler);

const initialPacientes = [
    { nome: "Douglas", peso: 85, altura: 1.73, gordura: 24, imc: 0},
    { nome: "Tatiana", peso: 46, altura: 1.55, gordura: 19, imc: 0}
];

function botaoHandler(evento) {
    evento.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    insereNaTabela(paciente);

    form.reset();
    document.querySelector("#mensagem-erro").innerHTML = "";
}

function insereNaTabela(paciente){
    var tabela = document.querySelector("#tabela-pacientes");
    var pacientePronto = montaTr(paciente);
    tabela.appendChild(pacientePronto);
}


function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    };

    return paciente;
}

function montaTr(objeto) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd("info-nome", objeto.nome));
    pacienteTr.appendChild(montaTd("info-peso", objeto.peso));
    pacienteTr.appendChild(montaTd("info-altura", objeto.altura));
    pacienteTr.appendChild(montaTd("info-gordura", objeto.gordura));
    pacienteTr.appendChild(montaTd("info-imc", (objeto.peso/(objeto.altura*objeto.altura)).toFixed(2)));
    return pacienteTr;
}

function montaTd(classe, content) {
    var criaTd = document.createElement("td");
    criaTd.classList.add(classe);
    criaTd.textContent = content;
    return criaTd;
}

function validaPaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (!validaPeso(paciente.peso)) {
        console.log(paciente.peso);
        erros.push("Peso inválido");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }
    return erros;
}

function listPacientes(initialPacientes){
    var tabela = document.querySelector("#tabela-pacientes");
    initialPacientes.forEach((p) => {
        tabela.appendChild(montaTr(p));
    })
}

listPacientes(initialPacientes);
