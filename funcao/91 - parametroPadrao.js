// estrategia 1 para gerar valor padrão
function soma1(a,b,c){
  let s1 = a || 1;
  let s2 = b || 1;
  let s3 = c || 1;

  return s1 + s2 + s3;
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0), soma1(0,0,0), soma1(0,0,2)); //soma(0)gerar um bug pois 0 é falso e por default os valores serão entendido como valor 1 assim definido na variavel

// estrategia 2,3 e 4 para gerar valor padrão
function soma2(a,b,c){
  let sa = a != undefined ? a : 1
  let sb = 1 in arguments ? b : 1
  let sc = isNaN(c) || String ? 1 : c

  return sa + sb + sc
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0), soma2(0,0,"a"))


// valor padrao do ES2015
function soma3(a = 1, b = 2, c = 3){
  return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma2(0,0,0),soma3(1,2,'a'))