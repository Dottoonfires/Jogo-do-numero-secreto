let numeroLimite = 10;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function alterar(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  // responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  alterar("h1", "Jogo do número secreto");
  alterar("p", "Escolha um número de 1 a 10");
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    alterar("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    alterar("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      alterar("p", "O número secreto é MENOR!");
    } else {
      alterar("p", "O número secreto é MAIOR!");
    }
    tentativas++;
    limpaCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limpaCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limpaCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
