maiorOuMenor = (primeiroNumero, segundoNumero) => {
  if (typeof primeiroNumero != typeof segundoNumero) return false;
  return primeiroNumero >= segundoNumero;
};

console.log(maiorOuMenor("d", 1));
