// import Lancamento from './129 - classe1';

// const agua = new Lancamento()

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

const avo = new Avo("Silva");
console.log(avo);

const pai = new Pai();
console.log(pai)

const filho = new Filho("Jogador");
console.log(filho);
