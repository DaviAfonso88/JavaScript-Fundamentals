const funcionarOuNao = (valor, chanceDeErro) => {
  return new Promise((resolve, reject) => {
    try {
      con.log("temp");
      if (Math.random() < chanceDeErro) {
        reject("Ocorreu um erro");
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
};

funcionarOuNao("testando...", 0.9)
  .then((v) => console.log(`Valor: ${v}`))
  .then(
    (v) => console.log(v),
    (err) => console.log(`Erro Esp: ${err}`)
  )
  .then(() => console.log("Quase fim"))
  .then(() => console.log("Fim"))
  .catch((err) => console.log(`Erro Geral: ${err}`));
