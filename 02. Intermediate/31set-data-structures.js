// Set is a built-in data structure that represents a collection of uniques values.
// Unlike arrays, Set allows you to store only uniues values which means duplicate
// values are automatically removed. Each values can occur only once within a set.

// set object are useful when you need to store a list of uiques elements and quickly check
// for the existence of a specifics value.

const initialValues = [1, 2, 2, 3];
const mySet = new Set(initialValues);
console.log(mySet);
console.log(mySet.has(1));
mySet.delete(2);
console.log(mySet);
// mySet.clear();
// console.log(mySet);

for (let item of mySet) {
  console.log(item);
}
