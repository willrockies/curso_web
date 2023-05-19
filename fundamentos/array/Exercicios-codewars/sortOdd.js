function sortArray(array) {
  let index = [];
array.filter((v,i) => v % 2 && index.push(i))
.sort((a,b) => a - b)
.forEach((v,i) => array[index[i]] = v)

return array
}


//  let vetor = [5, 8, 6, 3, 4];
//console.log(sortArray(vetor))
