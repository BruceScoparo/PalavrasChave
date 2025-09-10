import {PALAVRAS_RUINS} from "./palavrasruins.js";

const botaoMostraPalavras = document.querySelector ('#botao-palavraChave');

botaoMostraPalavras = document.addEventListener ('click', mostraPalavras);

function mostraPalavrasChave () {
    const texto = document.querySelector ('#entrada-de-texto').value;
    const campoResultado = document.querySelector ('#resultado-palavra-chave');
    const palavrasChave = processaTexto (texto);

    campoResultado.textContent = palavrasChave.join(",");
}
