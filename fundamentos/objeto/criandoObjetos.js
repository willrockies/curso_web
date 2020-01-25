// usando a notação literal

const obj1 = {};
console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) {
  //nome esta visivel pois usa o this, ja  preco e desc não estão
  this.nome = nome;

  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const funcionario1 = criarFuncionario("Wilson", 7000, 4);
const funcionario2 = criarFuncionario("Alves", 11400, 1);

console.log(funcionario1.getSalario(), funcionario2.getSalario());

//Object.create

const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//uma função famosa que retorna objeto
const fromJSON = JSON.parse('{ "info": "Sou um JSON" }');
console.log(fromJSON.info);
