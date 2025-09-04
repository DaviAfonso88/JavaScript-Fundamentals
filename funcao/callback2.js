const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
let notaBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notaBaixas1.push(notas[i]);
  }
}

console.log(notaBaixas1);

// Com callback
notaBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log(notaBaixas2);

const notaBaixas3 = notas.filter((nota) => nota < 7);
console.log(notaBaixas3);
