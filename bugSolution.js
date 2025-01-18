function foo(a, b) {
  if (b === 0) {
    if (a === 0) {
      return 0; // Handle the edge case where both a and b are zero
    } else {
      return Infinity; // Or throw an error: throw new Error('Division by zero');
    }
  }
  return a / b;
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(10, 0)); // Output: Infinity
console.log(foo(0, 0)); // Output: 0
console.log(foo(0, 10)); // Output: 0