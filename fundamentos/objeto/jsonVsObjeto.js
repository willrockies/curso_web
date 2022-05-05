// JSON é um formato textual para objetos de dados
const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
console.log(JSON.stringify(obj));

/*  */
//convertendo json para objeto
// console.log(JSON.parse("{a: 1, b: 2, c:3 }"));
// console.log(JSON.parse("{'a':1, 'b': 2, 'c': 3}"));
console.log(JSON.parse('{ "a":1, "b":2, "c":3 }'));
console.log(JSON.parse('{ "a":1, "b":"string", "c":true, "d":{}, "e":[] }'));
