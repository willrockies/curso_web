// hoisting = Em JavaScript, funções e variáveis são hoisted (ou "levados ao topo"). Hoisting é um comportamento do JavaScript de mover declarações para o topo de um escopo (o escopo global ou da função em que se encontra).
console.log("a = ", a);
var a = 2;
console.log("a = ", a);

console.log("b = ", b);
let b = 2;
console.log("b = ", b);
