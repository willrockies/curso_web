function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sum = 0
  arrayOfSheep.forEach(element => {
    if(element){
      sum ++
    }
    
  });

  return sum
  
}

console.log(countSheeps([true,  true,  true,  false]))