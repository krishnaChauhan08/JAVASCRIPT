// when we call the forEach helper we pass in anonymous callback function.
// this function gets called one time for every elements in the array.
// whatever is inside , the function that logic happens

const colors = ["teals", "blue", "red", "green"];
colors.forEach((color) => console.log(color));

// Exercises
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
function adder(number) {
  sum += number;
}
numbers.forEach(adder);
console.log(sum);
