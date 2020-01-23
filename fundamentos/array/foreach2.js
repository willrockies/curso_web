Array.prototype.forEach2 = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

const arrayPokemon = [
  { nome: "Pikachu", forca: 10, ataque: 50 },
  { nome: "Charizard", forca: 10, ataque: 60 },
  { nome: "Squirtle", forca: 9, ataque: 40 },
];
// RPG de pokemon
Array.prototype.forEachDinamico = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

arrayPokemon.forEachDinamico(function(nomePokemon, indice) {
  console.log(
    `${indice + 1}. ${nomePokemon.nome} ${nomePokemon.forca} ${
      nomePokemon.ataque
    }`,
  );
});
