const a = 1
const b = 2
const c = 3

const obj1 = {chaveA: a, chaveB: b, chaveC: c}
const obj2 =  {a,b,c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
  funcao1: function (){
    //...
    
  },
  funcao2(){
    // apartir de ecma2015
    console.log('apartir de ecma2015')
  }
}

console.log(obj5.funcao2())