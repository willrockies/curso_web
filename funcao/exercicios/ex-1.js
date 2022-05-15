// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calc(a, b, operacao) {
  if(operacao === '+'){
    return a + b;
  }
  else if (operacao === "-") {
    return a - b;
  } else if (operacao === "*") {
    return a * b;
  } else {
    return a / b;
  }
}

console.log(calc(2,4, "+"))
console.log(calc(2,4, "-"))

function calcularOperacoes (operador1, operador2) {
  console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)
