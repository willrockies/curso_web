//  factory é uma função que retorna um objeto

// Factory simples
function criarPessoa() {
  return {
    nome: 'Wilson',
    sobrenome: 'Alves',
  }
}

console.log(criarPessoa());
// console.log(typeof criarPessoa)