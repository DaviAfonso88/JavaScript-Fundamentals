for (let letra of "Cod3r") {
  console.log(letra);
}

const assuntoEcma = ["Map", "Set", "Promise"];

for (let i in assuntoEcma) {
  console.log(i);
}

for (let assunto of assuntoEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let assunto of assuntosMap.keys()) {
  console.log(assunto);
}

for (let assunto of assuntosMap.values()) {
  console.log(assunto);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}

const s = new Set(["a", "b", "c"]);
for (let resultado of s) {
  console.log(resultado);
}
