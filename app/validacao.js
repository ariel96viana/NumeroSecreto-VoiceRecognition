function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (chute == "game over" || chute == "fim de jogo") {
    elementoChute.innerHTML += `
    <div>FIM DE JOGO</div>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `;
    return;
  }

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `
    <div>Valor inválido</div>
    <button id="jogar-novamente" class="btn-jogar">Reiniciar</button>
    `;
    return;
  }

  if (numeroMaiorOuMenorQueOPermitido(numero)) {
    elementoChute.innerHTML += `
    <div>Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor}</div>
    <button id="jogar-novamente" class="btn-jogar">Reiniciar</button>
    `;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era:</h3>
    
    <h2 class='numeroAcertado'><i class="fa-regular fa-face-smile"></i> ${numeroSecreto} <i class="fa-regular fa-face-smile"></i></h2>
    
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `;
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
