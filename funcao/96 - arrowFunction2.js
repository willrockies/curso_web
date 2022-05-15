// mesmo exemplo da aula 94 so que a function feita em arrow function o this muda o contexto

function Pessoa() {
    this.idade = 0;

    setInterval(() => {
      this.idade++
      console.log(this.idade)
    }, 1000)
}

new Pessoa