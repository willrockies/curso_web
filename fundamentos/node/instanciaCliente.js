const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

const contadorC = require("./instanciaNova")(); // Isto retorna um objeto
const contadorD = require("./instanciaNova")(); // Isto retorna um objeto

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor, contadorA.valor);

contadorD.inc();
contadorD.inc();

contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
