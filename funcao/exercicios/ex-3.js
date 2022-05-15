// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function calcularExpoente(base, expoente){
  let resultado =  Math.pow(base, expoente)
  console.log(resultado)

}

calcularExpoente(4,3)
calcularExpoente(2,3)

function expoente (base, expoente) {
  //Podemos fazer de 2 modos
  //Método antigo:
  let resultado = Math.pow(base, expoente)
  //Método novo:
  resultado = base ** expoente

  return resultado
}

console.log(expoente(2, 3))
console.log(expoente(4, 3))