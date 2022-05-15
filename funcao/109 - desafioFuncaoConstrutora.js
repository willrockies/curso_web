function Pessoa(nome){
  this.nome = nome
  this.falar = function(){
    return `Meu nome é ${this.nome}`
  }
}

const criarPessoa = new Pessoa('João');
console.log(criarPessoa.falar())