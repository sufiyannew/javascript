// avr
// Re assignment using var
var x = 10;
console.log(x);    // Output : 10

x = "Mayank";
console.log(x);    // Output : Mayank


// let
// Re definition using 'let'
let x = 10;

let x = "Mayank";
console.log(x);    // Output : Error!


// const
// Re assignment using 'let'

let x = 10;
console.log(x);    // Output : 10

x = "Mayank";
console.log(x);    // Output : Mayank


const x = 20;
console.log(x);      // Output : 20

x = 30;
console.log(x);      // Output : Error!



let x;      // No Error

var y;      // No Error

//const z;    Error! "Missing initializer in const declaration"