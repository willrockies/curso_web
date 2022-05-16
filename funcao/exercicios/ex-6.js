// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos

function montanteDaAplicacaoSimples(capitalInicial, taxaDeJuros, tempoAplicacao){
  
  let resultado = capitalInicial + (capitalInicial * taxaDeJuros * tempoAplicacao) 
  return resultado
}

function montanteDaAplicacaoComposto(capitalInicial, taxaDeJuros, tempoAplicacao){
  
  let resultado = capitalInicial * (1 + taxaDeJuros) ** tempoAplicacao
  return resultado.toFixed(2).toString()
}

console.log(montanteDaAplicacaoSimples(1000, 10/100, 2))
console.log(montanteDaAplicacaoComposto(1000, 10/100, 2))