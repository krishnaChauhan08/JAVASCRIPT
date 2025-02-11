// the map() methods creates a new array popularated with the results
// of calling a provifed function on every in the calling array.

let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((num) => num * 2);
console.log(double);

// Exercises
const num = [1, 2, 3];
function myfunction(n) {
  return n * 10;
}
const results = num.map(myfunction);
console.log(results);
