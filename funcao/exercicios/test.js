// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function getCharFromString(str, index) {
//   return str.charAt(index);
// }

// function solution(S) {
//   // Implement your solution here

//   let string_length = S;
//   const up = "^";
//   const down = "v";
//   const left = "<";
//   const right = ">";

//   let up_count = 0;
//   let down_count = 0;
//   let left_count = 0;
//   let right_count = 0;

//   for (let i = 0; i < string_length.length; i++) {
//     let index = i;
//     let ch = getCharFromString(S, index);

//     if (ch == up) {
//       up_count ++;
//     } else if (ch == down) {
//       down_count ++;
//     } else if (ch == left) {
//       left_count ++;
//     } else if (ch == right) {
//       right_count ++;
//     } else {
//       console.log("teste");
//     }
//   }

//   let directions = [up_count, down_count, left_count, right_count];
//   let maximum_index = 0;
//   let maximum = 0;
//   let arrow_sum = 0;
//   for (let j = 0; j < 4; j++) {
//     if (directions[j] > maximum) {
//       maximum = directions[j];
//       maximum_index = j;
//     }
//   }

//   // for (let x = 0; x < 4; x++) {
//   //   if (maximum_index != x) {
//   //     lowest_sum = lowest_sum + directions[x];
//   //   }
//   // }
//   return arrow_sum;
// }

// let myString = "vv<v";
// let arrow = solution(myString);

// console.log("lowest", arrow);

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(B) {
//   let count = 0;
//   let visited = new Set();
  
//   const search = (r,c,dir) => {
//       const newR = r+dir[0];
//       const newC = c+dir[1];
//       visited.add(`${newR}-${newC}`);
//       if (newR >= B.length || newC >= B[0].length) return;
//       if (B[r+dir[0]][c+dir[1]] === '.') return; 
//       search(newR,newC,dir);
//   }
      
//   for (let r=0; r<B.length; r++) {
//       for (let c=0; c<B[0].length; c++) {
//           if (B[r][c] === '.' || visited.has(`${r}-${c}`)) continue;
//           count++;
//           search(r,c,[0,1]); 
//           search(r,c,[1,0]); 
//       }
//   }
//   return count;
// }

function solution(S) {
  const words = S.split(" ");
  let longest = -1;
  for (let word of words) {
    const stripped = word.replace(/[^0-9a-z]/gi, "");
    if (word.length === stripped.length) {
      const letters = stripped.replace(/[^a-z]/gi, "");
      const numbers = stripped.replace(/[^0-9]/g, "");
      if (letters.length % 2 === 0 && numbers.length % 2 === 1) {
        longest = Math.max(longest, letters.length + numbers.length);
      }
    }
  }
  return longest;
}
const longest = 'test 5 a0A pass007 ?xyz' 
console.log(solution(longest));