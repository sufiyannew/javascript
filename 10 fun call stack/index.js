// function call stack
// stack oreder(lifo)last in frist out 

// variable assign to fun
let variable = function (){
    console.log("Hello");
}
console.log(variable)


let obj = {
    age:25,
    wt: 36,
    ht:180,
    greet: ()=>{
        console.log("hello Dunia");
    }
}

console.log(obj.age);
obj.greet();

//DS functions 
const arr = [
    function (a,b){
        return a+b;
    },
    function (a,b){
        return a-b;
    },
    function (a,b){
        return a*b;
    },
]
let first = arr[2]
let ans = first(10,29)
console.log(ans);

// var greet;
// console.log(greet)


// var greet = function() {
//     console.log("Namaste Dunia");
// }


// function solve(number) {
//     return function(number) {
//         return number*number;
//     }
// }

// let ans = solve(5);

// let finalAns = ans(10);
// console.log(finalAns);


// function greetMe(greet, fullName) {
//     console.log("hello ", fullName);
//     greet();
// }


// function greet() {
//     console.log("Greeting for the day")
// }

// greetMe(greet, "Babbar");

// greet();

// const object1 = new Human();
// class Human {

// }


// sayHello();
// let sayHello = function() {
//     console.log("Hello Jee, kaise ho saare");
// }


// console.log(age);
// const age = 25;


// {

// console.log(age);
// var age = 25;


// // sayMyName("Babbar");

// function sayMyName(finalName) {
//     console.log(finalName);
// }

// }