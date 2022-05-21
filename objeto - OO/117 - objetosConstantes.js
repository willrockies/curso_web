// pessoa -> enderecoMemoria123 -> {...} 'estou atribuindo ao chave e não uma variavel'
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> aponta para novo endereçoMemoria456 -> {...} 'erro pq constante não se atribui para um novo valor'
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // não deixa mexer no objeto na sua chave/valor

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Pedro'
console.log(pessoaConstante.nome)