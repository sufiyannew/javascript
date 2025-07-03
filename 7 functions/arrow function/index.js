// Traditional function expression
const greet = function(name) {
  return "Hello, " + name + "!";
};

// Arrow function equivalent
const greetArrow = (name) => {
  return "Hello, " + name + "!";
};

console.log(greet("Alice"));        // Output: Hello, Alice!
console.log(greetArrow("Bob"));     // Output: Hello, Bob!