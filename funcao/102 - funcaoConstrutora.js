function Carro(velocidadeMaxima = 200, delta = 5) {
  let velocidadeAtual = 0;

  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 250);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);
