let firstName = "salman";  // double quote
let lastName = 'ansari';   // single quotes
let multiLineStr = `ansari
salman`;   // template or multiline string
console.log(typeof(firstName), typeof(lastName), multiLineStr);


// String operations

// Concatenation
let option1 = "Hello";
let option2 = "Duniya";

let finalStr = `${option1}${option2}`;  // Template string
console.log(option1 + option2);  // Concatenation using '+' operator

// Substring
let str = "Hello World";
let subStr = str.substring(0, 5);  // Extracts from index 0 to 5 (not inclusive)
console.log(subStr);  // Output: "Hello"

// String length
console.log(option1.length);  // Output: 5

// Uppercase
console.log(option1.toUpperCase());  // Output: "HELLO"

// Lowercase
console.log(option2.toLowerCase());  // Output: "duniya"

// Get specific characters
console.log(str.charAt(6));  // Output: "W" (Character at index 6)
console.log(str[6]);         // Another way to get "W"

// Index of
console.log(str.indexOf("World"));  // Output: 6 (Starting index of substring "World")

// Replace
let newStr = str.replace("World", "Universe");
console.log(newStr);  // Output: "Hello Universe"

// Split
let splitStr = str.split(" ");
console.log(splitStr);  // Output: ["Hello", "World"]
