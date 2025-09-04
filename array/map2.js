const carrinho = [
  '{"nome": "borracha", "preco": 3.45}',
  '{"nome": "caderno", "preco": 13.90}',
  '{"nome": "kit de lapis", "preco": 41.22}',
  '{"nome": "caneta", "preco": 7.50}',
];

carrinhoObj = (json) => JSON.parse(json);
apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(carrinhoObj).map(apenasPreco);
console.log(resultado);
