// BOTÃO DE MENSAGEM

const mensagemBtn = document.getElementById("mensagemBtn");
const mensagem = document.getElementById("mensagem");

mensagemBtn.addEventListener("click", function () {

    mensagem.innerHTML =
        "🌎 Produzir com consciência é proteger o futuro das próximas gerações.";

});


// CONTADOR AMBIENTAL

let contador = 0;

const contadorBtn = document.getElementById("contadorBtn");
const contadorTexto = document.getElementById("contador");

contadorBtn.addEventListener("click", function () {

    contador++;

    contadorTexto.innerHTML = contador;

});


// MODO ESCURO

const modoEscuro = document.getElementById("modoEscuro");

modoEscuro.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


// FORMULÁRIO

const formulario = document.getElementById("formulario");
const resposta = document.getElementById("respostaFormulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    // Captura o nome digitado
    let nomeUsuario = document.getElementById("nome").value;

    resposta.innerHTML =
        `✅ Obrigado, ${nomeUsuario}! Sua mensagem foi enviada com sucesso.`;

});