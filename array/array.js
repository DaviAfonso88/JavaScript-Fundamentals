let aprovados = new Array("bia", "carlos");
console.log(aprovados);

aprovados = ["bia", "carlos"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[2] = "paulo";
aprovados.push("abia");
console.log(aprovados.length);

aprovados[9] = "rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // Altera o array
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["bia", "carlos", "ana"];
aprovados.splice(1, 0, "Elemento1", "Elemento2");
console.log(aprovados);
