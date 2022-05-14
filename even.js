const isEven = function(num) {
  return num % 2 === 0
}

isEven(20); //retuen statement so no print in console
console.log(isEven(20)); //prints true
console.log(isEven(19));

let tenIsEven = isEven(10)

console.log(tenIsEven);

let elevenIsEven = isEven(11)
console.log(elevenIsEven);