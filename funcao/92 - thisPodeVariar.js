// testar no navegador(browser0)
function f1(){console.log(this === window)}
console.log(f1())
function f2(){console.log(this === global)}

