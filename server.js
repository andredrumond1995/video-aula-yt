const express = require('express');
const app = express();
const port = 3000;

function criarUsuario(body) {
    //lógica para criação do usuário no banco de dados
    return { nome: body.name, id: 1 };
}

app.post('/users', (req, res) => {
  const usuario = criarUsuario(req.body);

  res.json(usuario);
});

app.listen(port, () => {
  console.log(`Servidor está rodando`);
});
