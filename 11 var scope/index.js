// //global scope
const age = 15;

console.log(age);

{
    console.log(age)
}
if(true ){
    console.log(age)
}
for(let i=0; i<2; i++) {
    console.log(age);
}

function sayHello() {
    console.log("hi ", age);
}
sayHello();


//function scope
console.log(fullName);
function sayHello() {
    const fullName = "Earth";
    console.log("Hello Dunia ", name);
}
// console.log(fullName);
sayHello();


//block scope
//var kerword not follow block scope

console.log(height);
{
    var height = 180;
}

console.log(height);


// temporal dead zone
console.log(marks);
console.log("babbar");
console.log("Love");
const marks = 100;
console.log(marks);



// {
//     const age = 100;
// }

// console.log(age);


// temporal dead zone



