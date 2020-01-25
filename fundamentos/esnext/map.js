const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("Angular", { framework: true });

console.log(tecnologias.react); // Não funciona!
console.log(tecnologias.get("react"));

const chavesVariadas = new Map([
  [function() {}, "Função"],
  [{}, "Objeto"],
  [123, "Numero"],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(vl, ch);
});
console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

// Não aceita repetição
chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b");
console.log(chavesVariadas);
