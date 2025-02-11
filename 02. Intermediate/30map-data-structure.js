// map is built-in data structure that allows to store the keys and values pairs where 
// both keys and values can be of any data types. It is similar to object but object keys 
// can only be of strings and symbols whereas map keys can of any data type like object,
// function,array etc.

const map = new Map();

const keyOne = "krishna";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "value of key one");
map.set(keyTwo, "values of key two");
map.set(keyThree, "value of key three");

console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);
console.log(map);

for (let [key, value] of map) {
  console.log(`${key}--${value}`);
}

for (let key of map.keys()) {
  console.log(key);
}

for(let value of map.values()){
    console.log(value)
}
