function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    // innerFunction has lexical access to outerVariable
    console.log(outerVariable);
  }

  return innerFunction;
}

const myInnerFunction = outerFunction(); // outerFunction has finished executing
myInnerFunction(); // Still logs "I am from the outer function"