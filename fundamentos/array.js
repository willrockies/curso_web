const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
console.log(valores[4]);
valores[4] = 10;
valores[10] = 7;
console.log(valores);
console.log(valores.length);
valores.push({ id: 3 }, false, null, "texto");
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log("delete o valor 0", valores);

console.log(typeof valores);
