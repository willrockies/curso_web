const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao); // acessando o objeto pessoa atraves do this, para se refericiar ao chave/propriedade saudação
  },
};
pessoa.falar();
//
const falarStorage = pessoa.falar;
falarStorage(); // conflito entre paradigmas: funcional e OO
//
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

// In this example, this refers to the person object.

// Because fullName is a method of the person object.
const Person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(Person.fullName());
