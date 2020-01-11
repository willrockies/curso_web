const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c }; // antigamente atribuia o valor neste formato de objeto
const obj2 = { a, b, c }; //podemos atribuir desta forma no ecma2015

console.log(obj1, obj2);

// criar um atributo dinamicamente
const nomeAttr = "Nota";
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;

console.log(obj3);
const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

const obj5 = {
  funcao1: function() {
    console.log("Chamou função 1");
  },
  //novo ecmascript podemos fazer de uma forma reduzida
  funcao2() {
    console.log("Chamou função 2");
  },
};
console.log(obj5.funcao1(), obj5.funcao2());
