const sayHello = function (name) {
  console.log("WASSSup " + name);
}

sayHello("salma");

sayHello("bethany")

const sayBye = function (name) {
  console.log("goodbye" + name);
}
sayBye('salma'); /*I get a value when i call the fucntion because 
A console.log statement will result in some content being displayed in the console. */

const myAge = function(num) {
  return "my age is " + num;
}
myAge(13); //A return statement will not output anything to the console
console.log(myAge(13)); // I can cnsole.log the value it returns