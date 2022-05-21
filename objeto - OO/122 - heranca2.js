// cadeia de prototipos(protoype chain)
Object.prototype.attr0 = "0"; // evitar este tipo de estrutura
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attrA);
console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0);

// objeto modelo, prototipo
const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

console.log(carro.status());

const ferrari = {
  modelo: "F40",
  velMax: 324, //shadowing
};
const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

// setando meu modelo prototipo 'carro' para o objeto ferrari e objeto volvo
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

