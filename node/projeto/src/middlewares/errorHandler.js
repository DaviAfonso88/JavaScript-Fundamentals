function errorHandler(err, req, res, next) {
  console.error(err.message);
  res.status(500).json({ error: "Erro interno no servidor" });
}

module.exports = errorHandler;
