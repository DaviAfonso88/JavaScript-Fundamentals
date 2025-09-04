const bancoDeDados = require("../models/bancoDeDados");

function listar(req, res, next) {
  try {
    res.json(bancoDeDados.getProdutos());
  } catch (err) {
    next(err);
  }
}

function buscarPorId(req, res, next) {
  try {
    const produto = bancoDeDados.getProduto(req.params.id);
    if (!produto)
      return res.status(404).json({ error: "Produto não encontrado" });
    res.json(produto);
  } catch (err) {
    next(err);
  }
}

function criar(req, res, next) {
  try {
    const produto = bancoDeDados.salvarProduto(req.body);
    res.status(201).json(produto);
  } catch (err) {
    next(err);
  }
}

function atualizar(req, res, next) {
  try {
    const produto = bancoDeDados.salvarProduto({
      id: req.params.id,
      ...req.body,
    });
    res.json(produto);
  } catch (err) {
    next(err);
  }
}

function remover(req, res, next) {
  try {
    const produto = bancoDeDados.deleteProduto(req.params.id);
    if (!produto)
      return res.status(404).json({ error: "Produto não encontrado" });
    res.json({ message: "Produto removido com sucesso", produto });
  } catch (err) {
    next(err);
  }
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };
