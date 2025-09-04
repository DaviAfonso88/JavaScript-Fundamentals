const pilotos = ["vettel", "alonso", "raikkonen", "massa"];
pilotos.pop(); // remove o ultimo
console.log(pilotos);

pilotos.push("verstappen");
console.log(pilotos);

pilotos.shift(); // remove o primeiro
console.log(pilotos);

pilotos.unshift("hamilton");
console.log(pilotos);

// splice pode adicionar e remover

// adicionar
pilotos.splice(2, 0, "bottas", "massa");
console.log(pilotos);

// remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
