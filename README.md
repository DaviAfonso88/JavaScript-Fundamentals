# 🚀 API de Produtos com Node.js e Express

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![License](https://img.shields.io/badge/License-MIT-green)

Uma **API de gerenciamento de produtos**, construída com **Node.js e Express**, criada para consolidar fundamentos de JavaScript e aplicar boas práticas de desenvolvimento backend.  

![Fluxo completo da API](https://github.com/user-attachments/assets/080259f3-cd13-411b-b82c-4bd31413c68b)  
*Exemplo de fluxo completo da API no Postman: GET, POST, PUT e DELETE*  

---

## 🧱 Fundamentos aplicados
- Arrays e métodos (`map`, `reduce`, `filter`, `forEach`)  
- Estruturas de controle (`if`, `switch`, `loops`)  
- Funções (`arrow`, `callback`, `closure`, `factory`, `função construtora`)  
- Escopo e `this`  
- Objetos e OOP (classes, herança, getters/setters, JSON)
- Promise e funções async await

---

## ⚡ Funcionalidades
- CRUD completo: **GET, POST, PUT, DELETE**  
- Validação de dados: produtos só podem ser criados com `nome` e `preço` válidos  
- Middleware global para tratamento de erros  
- Estrutura limpa e escalável, pronta para integração com bancos reais  

---

## 🏗 Estrutura do projeto
```text
src/
  routes/
    produtos.js
  controllers/
    produtosController.js
  models/
    bancoDeDados.js
  middlewares/
    errorHandler.js
  servidor.js
```
---

## 📌 Endpoints

| Método | Rota             | Descrição                  |
|--------|-----------------|----------------------------|
| GET    | `/produtos`      | Lista todos os produtos    |
| GET    | `/produtos/:id`  | Busca um produto pelo ID   |
| POST   | `/produtos`      | Cria um novo produto       |
| PUT    | `/produtos/:id`  | Atualiza um produto pelo ID|
| DELETE | `/produtos/:id`  | Remove um produto pelo ID  |

---

## ⚙️ Como rodar

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor em modo desenvolvimento
```bash
npm run dev
```
O servidor ficará disponível em http://localhost:3003

---

## 👨‍💻 Desenvolvido por

<table>
  <tr>
    <td align="center">
      <a href="#">
         <img src="https://avatars.githubusercontent.com/u/89953265?v=4" width="100px;" alt="Foto de Davi Afonso no GitHub"/><br>
        <sub>
          <b>Davi Afonso</b>
        </sub>
      </a>
    </td>
</table>

