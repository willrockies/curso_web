function MeuObjeto(){
}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function (){
  console.log(`Opa! Meu nome é ${this.nome}`);
}

obj1.falar()

obj2.nome = 'Wilson'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// consultar https://www.youtube.com/watch?v=7ZxYJw9ebaM&t=856s&ab_channel=SouDev

