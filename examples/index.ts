// Example 1
let x: undefined;
console.log(x.name); // object is possibly undefined

// Example 2
let value = 'Hey';
console.log(value.toLowerCase()); // function that only applies to strings
value = 5; // cant assign value to number because it is implicitly a string type

// Example 3
let val: string | number = 'hey';
console.log(val.toLowerCase());
val = 5;
console.log(val.toLowerCase()); // cant call this on number

// Example 4
function isLessThanPointFive() {
  return Math.random < 0.5;
  // operator < cannot be applied to type because Math.random is a function that needs to be called
  // Math.random() is correct
}

// Example 5: Basic logic error
if (value !== 'a') {
  // do a thing
} else if (value === 'b') { // unreachable code since a and b have no overlap
  // do another thing
}
