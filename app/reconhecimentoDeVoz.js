const elementoChute = document.getElementById("chute");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  const chute = e.results[0][0].transcript;
  exibeChuteNaTecla(chute);
  verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTecla(chute) {
  if (chute == "game over" || chute == "fim de jogo") {
    document.body.innerHTML = `
        <h2>FIM DE JOGO</h2>
        <div id="chute" class="mensagem"> Você disse</div>
        <span class="box">${chute}</span>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    document.body.style.backgroundColor = "var(--end-color)";
  } else {
    elementoChute.innerHTML = `
        <div> Você disse</div>
        <span class="box">${chute}</span>
        `;
  }
}

recognition.addEventListener("end", () => recognition.start());
