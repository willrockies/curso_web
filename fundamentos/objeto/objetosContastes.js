const pessoa = { nome: "Wilson" };
pessoa.nome = "Alves"; //sucesso pois estou apontando para a mesma const porem com outro valor no atributo
console.log(pessoa);

//pessoa = { nome: "Silva" }; //erro pois estou apontando para outro objeto da const

Object.freeze(pessoa); //congelei o objeto

pessoa.nome = "Mario";
pessoa.end = "Rua dos bobos";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa.end);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Wilson" });
pessoa.nome = "Silva";
console.log(pessoaConstante);
