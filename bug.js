function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling of the edge case
  }
  return a / b; // Potential division by zero error
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(10, 0)); // Output: Infinity
console.log(foo(0, 0)); // Output: 0
console.log(foo(0, 10)); // Output: 0