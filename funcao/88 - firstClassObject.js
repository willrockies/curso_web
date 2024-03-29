// Função em JS é First-Class Object
// Higher-order function

// criar de forma literal
function func1() {}

// Armazenar em uma variavel
const func2 = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  func1,
  func2,
];
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

// Passar função como Param
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

// uma função pode retornar/conter um função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(1,2)(3)
const cincoMais = soma(2,3)
cincoMais(4)

