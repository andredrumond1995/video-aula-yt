const express = require('express');
const app = express();
const port = 3000;

app.post('/users', (req, res) => {
  // Lógica para criar usuário
  // ...
  res.json({ message: 'Usuário criado com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor está rodando`);
});
