//função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 10, 4, 8);
imprimirSoma("test","e");

//função com retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());
console.log(soma('Test','e'))
