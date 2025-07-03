//  abject take key:value 
let obj1 = {
    name: "salman",
    "full name" : "ansari salman",
    age: 30,
    great: function(){
        console.log("object function")
    }
}
console.log(obj1)
console.log(typeof(obj1))
obj1.great();

for (let key in obj1){
    console.log(key, " ", obj1[key]);
}
