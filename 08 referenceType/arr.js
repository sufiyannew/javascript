/* /*array is a collection of items like 
str
int 
null
boolean
none
premetive 
non-premitive
etc

console.log('Arrys')
//creation of array
let arr = [
    "Hello",
    10,
    true,
    null,
    undefined,
    {name: "John", age: 30},
    function() {console.log("Hello")},
    [1,2,3],
    Symbol("symbol")
 ];
console.log(arr)

// arrays constractor

let arr2 = new Array(10, 'salman', true);
console.log(arr2)
console.log(typeof(arr), typeof(new Array))


// Array indexing

console.log(arr[2])
arr[2] = "World"
console.log(arr[2])

//  Array length 

    console.log(arr.length)
    arr.push("new item")
    console.log(arr.length)

// Array methods

console.log(arr.join(' '))
console.log(arr.pop())
console.log(arr.shift())
console.log(arr)


// Array iteration

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

arr.forEach(function(item, index, array){
    console.log(item, index, array)
})

// Array filter

let filteredArr = arr.filter(function(item){
    return typeof item === "string"
})
console.log(filteredArr)

// Array map

let mappedArr = arr.map(function(item){
    return item.toUpperCase()
})
console.log(mappedArr)

// Array reduce

let sum = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
}, 0)
console.log(sum)

// Array splice

arr.splice(3, 0, "inserted", "item")
console.log(arr)

// Array slice
let slicedArr = arr.slice(3)
console.log(slicedArr)

// Array concat

let concatArr = arr.concat([4,5,6])
console.log(concatArr)
*/

// Array map method

// get scuare given value 
// let array = [10,15,20,25,30,'kunal',40]
/*let ans = array.map((number) => {
    return number*number;
})
console.log(ans)*/

// get index
/*array.map((number, index) =>{
    console.log(index, number)
})*/

// filter 
// get even num
/*let finalAnswer = array.filter((number) => {
    return number % 2 === 0;

    // return line and conditional are work same

    // if (number % 2 === 0){
    //     return true
    // }
    // else{
    //     return false
    // }
})
console.log(finalAnswer)*/

/*let answer = array.filter((value) => {
    // use for getting number 
    //if (typeof value === "number" ){
    if (typeof value === "string" ){
        return true
    }
    else{
        return false
    }
})
console.log(answer);*/



// reduce method
let newArr = [10,20,30,40,50]
let reduceAns = newArr.reduce((acc, curr) => {
    return acc + curr;
} , 0)
console.log(reduceAns);

// for EACH loop
newArr.forEach((value ,index) => {
    console.log("number; ", value, "index: ", index)
}) 

// for off loop
let Array = [10,20,30,40]
for(let value of Array){
    console.log(value); 
        
    
}

