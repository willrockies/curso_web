// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function verificarTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
    console.log("Equilatero");
  }
  else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC ){
    console.log("Isoceles");
  }
  else if (ladoA !== ladoB || ladoB !== ladoC || ladoA !== ladoC) {
    console.log("Escaleno");
  } 
}

verificarTriangulo(2, 2 , 2);
verificarTriangulo(2, 1 , 2);
verificarTriangulo(0, 1 , 2);

