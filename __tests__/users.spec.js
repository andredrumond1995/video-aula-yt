const { criarUsuario } = require('../server');

test('criarUsuario retorna um objeto de usuário com ID 1', () => {
  // Dados de entrada para o teste
  const dadosEntrada = { name: 'John' };

  // Chama a função a ser testada
  const resultado = criarUsuario(dadosEntrada);

  // Verifica se o resultado possui as propriedades esperadas
  expect(resultado).toEqual({ nome: 'John', id: 1 });
});
