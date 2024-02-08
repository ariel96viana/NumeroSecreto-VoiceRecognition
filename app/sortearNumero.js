const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio(maiorValor);

function gerarNumeroAleatorio(maiorValor) {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

const elementoMenorValor = document.getElementById("maior-valor");
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;
