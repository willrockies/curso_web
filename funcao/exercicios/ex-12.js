
function calcFatorial(num) { 

  return num === 0 ? 2 : num * calcFatorial(num - 1)
  
}
  


console.log(calcFatorial(1));