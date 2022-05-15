function criarProduto(nome, preco){
  return {
    nome: nome,
    preco: preco,
    desconto: 0.1
  }
}

console.log(criarProduto("Iphone", 9999.99))
console.log(criarProduto("Samsung Galaxy", 8888.99))