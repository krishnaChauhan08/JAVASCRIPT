// the reduce() method applies the reducer function to each elements of an array,
// accumulating the result into a single value. It is often use to perform calculations or
// aggregations on array elements and sipmlify the array into a single value.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((p, c) => {
  //   console.log(`previous:${p}`);
  //   console.log(`current:${c}`);
  return p + c;
}, 0);
console.log(sum);

const peoples = [
  { name: "krishna", age: 20 },
  { name: "huxn", age: 19 },
  { name: "alex", age: 41 },
];
const oldestAge = peoples.reduce((p, c) => {
  return c.age > p ? c.age : p;
}, 0);
console.log(oldestAge);

const words = [
  "apple",
  "banana",
  "orange",
  "apple",
  "banana",
  "grape",
  "orange",
];
const wordFrequency = words.reduce((FrequencyMap, word) => {
  FrequencyMap[word] = FrequencyMap[word] || 0 + 1;
  return FrequencyMap;
}, {});
console.log(wordFrequency);
