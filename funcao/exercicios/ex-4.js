// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function calcularDividendo(dividendo, divisor){
  // console.log("Resultado ", Math.floor(dividendo / divisor))
  // console.log("resto", dividendo % divisor)

  let calc = Math.floor(dividendo / divisor);
  let resto =  dividendo % divisor
  console.log(calc, resto)
}

calcularDividendo(10, 2)
calcularDividendo(11, 4)
