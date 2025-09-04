const express = require("express");
const app = express();
const produtosRoutes = require("./routes/produtos");
const errorHandler = require("./middlewares/errorHandler");

const PORTA = 3003;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/produtos", produtosRoutes);

// Middleware global de erro
app.use(errorHandler);

app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando na porta ${PORTA}`);
});
