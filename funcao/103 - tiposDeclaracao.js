console.log(soma(3, 4)); //interpretador javascript ja executou todas as funções
// console.log(sub(3,4)) // não executou function expression
// function declaration
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function (x, y) {
  return x - y;
};
console.log(sub(3, 4));

// name function expression - pouco usado
const mult = function multi(x, y) {
  return x * y;
};
console.log(mult(2,2));

//
