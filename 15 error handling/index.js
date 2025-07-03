// compile time error

// syntax error
// console.log("hello";

// run time error

// reference error
// console.log(x);

try{
    console.log("try block start here");
    console.log(x);
    console.log("try block end here");
}

catch(err){
    console.log("catch block start here");
    console.log("error occupide here", err);
}

finally{
    console.log("finally block start here");
    console.log("this block will always run");
}


