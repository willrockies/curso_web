const pessoa = {
  saudacao: "Bom Dia!",
  falar() {
    console.log(this.saudacao);
  },
};

//pessoa.falar();
//const falar = pessoa.falar;
//falar(); //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); // bind serve para amarrar o objeto
falarDePessoa();
