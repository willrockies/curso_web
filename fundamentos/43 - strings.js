const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); //code tabela asc
console.log(escola.indexOf("3"));
console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log(
  "Escola"
    .concat(" ")
    .concat(escola)
    .concat("!")
);

console.log(escola.replace(3, "e"));

console.log("Wilson,Alves,Silva".split(","));

function FirstReverse(str){
  return str.split('').reverse().join('')
}

console.log(FirstReverse('coder'))