let dobro = function(a){
  return 2 * a;
}

dobro = (a) => {
  return 2 * a;
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function(){
  return 'Olá'
}

ola = () => 'ola'
ola = _ => 'Ola' // '_' é um parametro aceitavel
console.log(ola());