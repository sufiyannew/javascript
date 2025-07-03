if (true) {
  let blockScopedLet = "I am block-scoped with let";
  const blockScopedConst = "I am block-scoped with const";
  var functionScopedVar = "I am function-scoped with var (not block-scoped)";

  console.log(blockScopedLet);
  console.log(blockScopedConst);
  console.log(functionScopedVar); // Accessible within this block
}

// console.log(blockScopedLet); // Error: ReferenceError: blockScopedLet is not defined
// console.log(blockScopedConst); // Error: ReferenceError: blockScopedConst is not defined
console.log(functionScopedVar); // Accessible here (var ignores block scope)