//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação:

const valor = "Global";

function minhaFuncao() {
  console.log(valor);
}
function exec() {
  const valor = "Local";
  minhaFuncao();
}
exec();
