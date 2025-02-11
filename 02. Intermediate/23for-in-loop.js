// iterates over the key or indices of the elements

//  for in loop in object
let person = {
  name: "krishan",
  age: 20,
  gender: "male",
};
for (let keys in person) {
  console.log(keys, person[keys]);
}

// for in loop in array
let list = ["one", "two", "three", "four"];
for (let i in list) {
  console.log(i, list[i]);
}

// exercise
const object = { a: 1, b: 2, c: 3 };
for (let keys in object) {
  console.log(`${keys}:${object[keys]}`);
}
