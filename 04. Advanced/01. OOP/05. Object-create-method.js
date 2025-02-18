let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

const krishna = Object.create(person);
krishna.firstName = "krishna";
krishna.lastName = "chauhan";
krishna.greet();

let john = Object.create(person, {
  firstName: { value: "John" },
  lastName: { value: "Doe" },
});

console.log(john);
john.greet;
 