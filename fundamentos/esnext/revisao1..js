// let e const
{
  var a = 2;
  let b = 3; // não consegue ser acessada de dentro do escopo
}
console.log(a);

//Template String
const produto = "Ipad";
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: "Wilson", idade: 31 };
//console.log(idade, nome);
console.log(i, nome);
