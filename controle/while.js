function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcap = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcap}`);
}

console.log("Até");
