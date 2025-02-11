let arr = [1, 2, 3];
let arr2 = [4, 5];

const user = {
  name: "jen",
  age: 22,
};

let arr3 = [...arr];
console.log(arr3);

let arr4 = [...arr2];
console.log(arr4);

let arr5 = [...arr, ...arr2];
console.log(arr5);

const user1 = { ...user };
console.log(user1);
