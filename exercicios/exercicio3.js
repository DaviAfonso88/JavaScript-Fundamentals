calcularSalario = (horasTrabalhadasNoMes, recebimentoPorHora) => {
  const salarioMes = horasTrabalhadasNoMes * recebimentoPorHora;
  const imposto = 0.3;
  const salarioLiquido = salarioMes - salarioMes * imposto;
  return `Salário igual a R$ ${salarioLiquido}`;
};
console.log(calcularSalario(150, 40.5));
