const globalVariable = "I am accessible everywhere!";

function greet() {
  console.log(globalVariable); // Accessible here
}

greet();
console.log(globalVariable); // Accessible here