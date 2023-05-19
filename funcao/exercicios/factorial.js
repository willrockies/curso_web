
// function FirstFactorial(num) { 

//   // code goes here
//   let factorial = num;
//   let resultado = 1
//   for (let i = factorial; i > 1; i-- ){
//     resultado *= i;
//   }
//   return num; 

// }
  
// console.log(FirstFactorial(4))


function solution1(A) {
  const pos = A.filter(num => num >= 1).sort((a, b) => a - b);
  let x = 1;
  
  for(let i = 0; i < pos.length; i++) {
    if (x < pos[i]) {
      return x;
    }
    x = pos[i] + 1;
  } 
  return x;
}

function solution2(A) {
    let x = 1
    
    A.filter(x => x >= 1)
     .sort((a, b) => a - b)
     .map((val, i, arr) => {
        if(x < arr[i]) return 
        x = arr[i] + 1
    })
    return x
}

function solution3(A) {
  const set = new Set(A);
  let i = 1;
    
  while (set.has(i)) {
    i++;
  }
  return i;
}

console.log(`Solution one is ${solution1([1, 3, 8, 4, 1, 2])}`);
console.log(`Solution two is ${solution2([-1, 3, 8, 6, 1, 2])}`);
console.log(`Solution three is ${solution3([1, 8, 6, 1, 2])}`);
