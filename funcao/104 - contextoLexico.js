let valor = 'Global';

function minhaFuncao(param){
  let valor = 'local'
  console.log(valor);

}

function exec(){
  let valor = 'localExec'
  minhaFuncao(valor);
}
// minhaFuncao()
console.log(exec())