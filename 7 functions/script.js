/**
 function functionName(parameters) {
    // function body
    // return value (optional)
}

 */

// Define a function called sayMyName that prints "My name is salman" to the console.
function sayMyName(){
    console.log("My name is salman");
}

// Call the function
sayMyName();



// count 1 to 10
function count() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// Call the function to see the output
count();


// Function with parameters

function greet(name) {
    console.log("Hello, " + name);
}

greet("salman"); // Call the function with "name" as the argument


//function get avrage 

    function getAverage(num1, num2) {
        return (num1 + num2) / 2;
    }

    console.log(getAverage(5, 10)); // Output: 7.5

// return function
function sumNum(a, b, c) {
    let sum = a + b + c;
        return sum;
    
}

 let ans = sumNum(2, 4, 8);
 console.log("printing sun:", ans) 


 function getMyName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}
let fullName = getMyName("ansari", "salman")
console.log("full name:", fullName)


console.log("the two function work are same but second i batter")
function getMul(a, b){
    return a*b;
}
console.log(getMul(2,10))

let getMultiplication = function (a, b){
    return a*b;
}
let answer = getMultiplication(2,20)
console.log(answer)


// arrow function
let getExp = (x, y) => {
    let ans = x**y;
    return ans;
}
console.log(getExp(5,2))

