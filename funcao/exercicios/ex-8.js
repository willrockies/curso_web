// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo)
let pontuacaoNosJogosDaTemporada = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'
function AvaliarPontuacao(registroJogos){
  let pontuacaoDeCadaJogo = registroJogos.split(', ')
  let qtsDeRecordes = 0;
  let maiorPontuacao = []
  let menorPontuacao = []
  let piorJogo = 1

  for(let i = 0; i < pontuacaoDeCadaJogo.length; i++){
    if(pontuacaoDeCadaJogo[i] > maiorPontuacao){
      maiorPontuacao =  pontuacaoDeCadaJogo[i] 
      // maiorPontuacao.push(pontuacaoDeCadaJogo[i])
      qtsDeRecordes++
    } else if(pontuacaoDeCadaJogo[i] < menorPontuacao){
      menorPontuacao = pontuacaoDeCadaJogo[i]
      // menorPontuacao.push(pontuacaoDeCadaJogo[i])
      piorJogo = i + 1;
    }
  }
  return [qtsDeRecordes,piorJogo]

}

console.log(AvaliarPontuacao(pontuacaoNosJogosDaTemporada))