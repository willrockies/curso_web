const fabricantes = ["Mercedes", "Audi", "BMW"];
//  callback passar uma função para outra função e quando determinado evento acontecer ser disparado
function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);

fabricantes.forEach(function (fabricante) {
  console.log(fabricante);
});
// ou arrow function
fabricantes.forEach(fabricante => console.log(fabricante))