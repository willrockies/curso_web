// O Two Sum é bastante comum durante entrevistas. Seu objetivo é identificar um par de números que somados batam com o valor da variável target.

// Ele pode ser escrito em um algoritmo que roda no tempo O(n).

// Exemplos

// Se o array é [4, 1, 2, -2, 11, 15, 1, -1, -6, -4] e o target é 9. Neste caso, seu programa deve retornar:

// [-2, 11]

// O motivo é bastante simples:

// -2 + 11 = 9

//Solução O(n log (n)) solução mais rapida
//target = 9

//array = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4]

//arrayOrdenado = [-6,-4,-2,-1,1,1,2,4,11,16] array.sorted
//                 E                      D

// > target: Move porteiro direita
// < Target: Move ponteiro esquerda
// = Target: Move os dois

function solutionOnLogN(numbers, target) {
  //let arrOrdenado = numbers.sort();

  left_pointer = 0;
  right_pointer = arrOrdenado.length - 1;

  while(left_pointer < right_pointer){
    let numbers_sum = arrOrdenado[left_pointer] + arrOrdenado[right_pointer];

    if(numbers_sum == target){
      return [numbers[left_pointer], numbers_sum[right_pointer]];

    }else if(numbers_sum < target){
      left_pointer += 1;

    }else if(numbers_sum > target){
      right_pointer -= 1;

    }
  }

  return [];

}
// const numArr = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4];

// let arrOrdenado = numArr.sort();
// console.log(solutionOnLogN(arrOrdenado,9));


//solução 0(N²)

//target = 9
/** percorrendo array */
//array = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4]

/* function range(start, stop, step) {
  if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
  }

  if (typeof step == 'undefined') {
      step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
  }

  return result;
}; */

function solutionOn2(numbers, target) {
  

  for (let i = 0; i < numbers.length; i++) {
    let num1_element = numbers[i];
    for (let j = 0; j < numbers.length + 1; j++) {
      if(num1_element + numbers[j] == target){
        let num2_element = numbers[j];
        return[num1_element, num2_element].indexOf(num1_element, num2_element);
      }
      
    }
    
  }

  return [];
}

const numArr = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4];

// let arrOrdenado = numArr.sort();
 console.log(solutionOn2(numArr,9));



 //solução 0(N)
 //tempo: O(n)
 //Espaço: O(n)

 function solutionOn(numbers, target){
    let calculatedNumbers = {} //minha hashTable para armazenar os numeros calculado

    for (let i = 0; i < numbers.length; i++) {
      //atribuindo e guardado N meu array uma variavel
      let y = target - numbers[i];
  
      if(y in calculatedNumbers){
        return [calculatedNumbers[y], i];
      }
        calculatedNumbers[numbers[i]] =i;
      
      
    }
    
    return [];
 }

const numArrOn = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4];
console.log(solutionOn(numArrOn,9));