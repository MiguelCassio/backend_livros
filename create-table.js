import { sql } from "./db.js"; // Importa a conexao com o banco de dados MySQL

const createTableQuery = `
CREATE TABLE IF NOT EXISTS videos (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255),
description TEXT,
duration INT
);

`;// Define a consulta SQL para criar a tabela "livros" se ela nao existir

// 0 mysq12 usa o método .query() que retorna uma Promise
sql.query(createTableQuery)
    .then(() => {
  console.log("Tabela 'livros' criada ou ja existente com sucesso no MySQL");
})

.catch((err) => {
console.error("Erro ao criar a tabela no MySQL:");
console.error(err.message);

});