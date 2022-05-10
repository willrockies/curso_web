const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log("Quadro de honra");
      break;
    case 8:
    case 7:
      console.log("Aprovado");
      break;
    case 6: case 5: 
      console.log("Recuperação");
      break
    case 4: case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    default:
      console.log('Nota invalida')
  }
};

imprimirResultado(10);
imprimirResultado(7.5);
imprimirResultado(6.55);
imprimirResultado(4.99);
imprimirResultado(-1);
imprimirResultado(11)