class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}
<<<<<<< Updated upstream:fundamentos/objeto/classe2.js
const filho = new Filho();
=======

const avo = new Avo("Silva");
console.log(avo);

const pai = new Pai(avo.sobrenome);
console.log(pai)

const filho = new Filho("Jogador");
>>>>>>> Stashed changes:objeto - OO/130 - classe2.js
console.log(filho);
const pai = new Pai();
console.log(pai);
