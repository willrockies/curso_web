const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter(function(p) {
    // return p.fragil;
    // return p.preco > 2000;
    // return p.fragil === false;
  }),
);
const ehcaro = produto => produto.preco >= 500;
const ehfragil = produto => produto.fragil;

console.log(produtos.filter(ehcaro).filter(ehfragil));
