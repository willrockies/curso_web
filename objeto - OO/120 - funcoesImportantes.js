const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach((e) => {
  console.log(`${e[0]}: ${[e[1]]}`);
});
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2019",
});
pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.entries(pessoa).forEach(([chave, valor]) =>{
//   console.log(`${chave}: ${valor}`)
// })

// Object.assign (ECMAScript 2015)
const destino = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 2, a: 4 };
const obj = Object.assign(destino, o1, o2);
console.log(obj)

Object.freeze(obj)
obj.c = 23
console.log(obj)