// --------------------------
// Using "this" as a global scope
console.log(window);
console.log(this);
console.log(this === window);

window.firstName = "HuXn";
this.lastName = "WebDev";

let fullName = function () {
  console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
};

fullName();
// --------------------------

// --------------------------
// Using "this" in object
const obj = {
  name: "HuXn",
  lastName: "WebDev",
  fullName: function () {
    // this keyword will now refer to the owner obj which in this case is
    // the (obj)
    // return this;
    return `${this.name} ${this.lastName}`;
  },
};

const res = obj.fullName();
console.log(res);
// --------------------------

// --------------------------
// Using "this" in Function
function callThis() {
  return this;
}

const res2 = callThis();
console.log(res2);
// --------------------------

// --------------------------
// using "this" keyword in arrow method
const obj2 = {
  name: "John",
  regularFunction: function () {
    return this.name;
  },
  arrowFunction: () => this.name,
};

console.log(obj2.regularFunction()); // Output: 'John'
console.log(obj2.arrowFunction()); // Output: undefined
// --------------------------

// --------------------------
let huxn = {
  firstName: "HuXn",
  lastName: "WebDev",
  fullName: function () {
    // let firstName = "HuXn";
    // let lastName = "WebDev";
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

huxn.fullName();
// --------------------------




//--------------------- EXERCISE-------------------------------
// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

// *************** SOLUTION

// Create a person object
const person = {
    name: "John",
    age: 30,
  
    // Method using a regular function
    greetRegular: function () {
      return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
    },
  
    // Method using an arrow function
    greetArrow: () => {
      return (
        "Hello, my name is " + this.name + " and I am " + this.age + " years old."
      );
    },
  };
  
  console.log(person.greetRegular()); // Output: Hello, my name is John and I am 30 years old.
  console.log(person.greetArrow()); // Output: Hello, my name is undefined and I am undefined years old.
  