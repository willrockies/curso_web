//estrategia 1 para gerar valor padrão

function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

//estrategia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c; //mais seguro, se quiser soma numeros vai assegurar que vai se um numero

  return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

//valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));

function soma4(a, b, c) {
  a = isNaN(a) ? 1 : a;
  b = isNaN(b) ? 1 : b;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(
  soma4(),
  soma4(3),
  soma4(1, 2, 3),
  soma4(0, 0, 0),
  soma4("10", 0, 0),
);
