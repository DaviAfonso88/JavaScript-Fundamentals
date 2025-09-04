Array.prototype.reduce2 = function (callback, valorInicial) {
  const indiceInicial = arguments.length > 1 ? 0 : 1;
  let acumulador = arguments.length > 1 ? valorInicial : this[0];

  console.log("Acumulador inicial:", acumulador);

  for (let i = indiceInicial; i < this.length; i++) {
    console.log(`\nRodada ${i}`);
    console.log("Acumulador antes:", acumulador);
    console.log("Elemento atual:", this[i]);

    acumulador = callback(acumulador, this[i], i, this);

    console.log("Acumulador depois:", acumulador);
  }

  console.log("\nResultado final:", acumulador);
  return acumulador;
};

// Exemplo de uso
const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];

nums.reduce2(soma, 0);
