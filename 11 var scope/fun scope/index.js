function calculateSum(a, b) {
  const result = a + b; // 'result' has function scope
  console.log(result);
}

calculateSum(5, 3);
// console.log(result); // This would cause an error: ReferenceError: result is not defined