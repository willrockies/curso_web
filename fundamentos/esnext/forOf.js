for (let letra of "Cod3r") {
  console.log(letra);
}
const assuntosEcma = ["Map", "Set", "Promise"];
for (let i in assuntosEcma) {
  console.log(i);
}
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntoMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);
for (let assunto of assuntoMap) {
  console.log(assunto);
}

// percorrendo somente a chave
for (let chave of assuntoMap.keys()) {
  console.log(chave);
}

// percorrendo somento o valor
for (let valor of assuntoMap.values()) {
  console.log(valor);
}

// destructiring
for (let [ch, vl] of assuntoMap.entries()) {
  console.log(ch, vl);
}

// em cima de um set
const s = new Set(["a", "b", "C"]);
for (let letra of s) {
  console.log(letra);
}
