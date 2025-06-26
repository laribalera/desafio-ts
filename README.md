# Projeto Biblioteca CRUD - API REST com TypeScript, Express e MongoDB

## Descrição

Este projeto é uma API REST simples para gerenciamento de uma biblioteca, permitindo CRUD (Create, Read, Update, Delete) de Editoras e Livros.  
O backend é construído com TypeScript, Express.js e utiliza MongoDB como banco de dados.  
As relações entre livros e editoras são feitas via referência (`ObjectId`), e o sistema permite manipular livros vinculando editoras pelo nome.

---

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express.js
- MongoDB + Mongoose
- dotenv (variáveis de ambiente)
- ts-node-dev (execução em desenvolvimento)

---

## Pré-requisitos

- Node.js (versão 18+ recomendada)
- MongoDB instalado e rodando localmente ou acesso a um cluster MongoDB Atlas
- npm ou yarn

---

## Instalação e configuração

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo .env na raiz do projeto e configure a conexão com o MongoDB:
```env
MONGODB_URI=mongodb://localhost:27017/minha-biblioteca
PORT=3000
```



