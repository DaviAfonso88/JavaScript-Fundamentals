const fs = require("fs");
const path = require("path");
const arquivo = path.join(__dirname, "dados.txt");

const lerArquivo = (arquivo) => {
  return new Promise((resolve, reject) => {
    fs.readFile(arquivo, "utf8", (err, conteudo) => {
      if (err) return reject(err);
      resolve(conteudo);
    });
  });
};

lerArquivo(arquivo)
  .then((conteudo) => conteudo.split(/\r?\n/).filter(Boolean))
  .then((linhas) => linhas.join(", "))
  .then((conteudo) => `O valor final é: ${conteudo}`)
  .then(console.log)
  .catch((err) => console.error("Erro ao ler arquivo:", err));
