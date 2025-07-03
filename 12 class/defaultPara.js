function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  // Function call with argument
  greet("Ali"); // Output: Hello, Ali!
  
  // Function call without argument
  greet(); // Output: Hello, Guest!
  
// second example

function sayName(name = "salman", lastName = name.toUpperCase()) {
    console.log(`My name is ${name} and last name is ${lastName}`);
}

// Call the function
sayName();

// default onject para meter
function showUserDetails(user = { name: "Guest", age: 18 }) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

// Call without arguments (default object will be used)
showUserDetails(); 
// Output: Name: Guest, Age: 18

// Call with a custom object
showUserDetails({ name: "Ali", age: 25 }); 
// Output: Name: Ali, Age: 25

// Call with partial object (missing properties will take default values)
showUserDetails({ name: "Zara" }); 
// Output: Name: Zara, Age: 18

