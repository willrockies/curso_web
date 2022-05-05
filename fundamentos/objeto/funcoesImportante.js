const pessoa = {
  nome: "Rebeca",
  idade: 12,
  peso: 13,
};
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

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
console.log(Object.keys(pessoa)); // O enumerable true a chave vai enumerar, false não vai enumerar

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); // vai concatenar os outros objetos no objeto dest
Object.freeze(obj);
obj.c = 1234;

console.log(obj);
