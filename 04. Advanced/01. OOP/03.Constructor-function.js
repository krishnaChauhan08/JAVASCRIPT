function CreatePeaople(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
  this.info = function () {
    console.log(
      `Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`
    );
  };
}

// NEW KEYWORD
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword

const krishna = new CreatePeaople("Krishna", "Chauhan", "Javascript");
console.log(krishna);
krishna.info();
