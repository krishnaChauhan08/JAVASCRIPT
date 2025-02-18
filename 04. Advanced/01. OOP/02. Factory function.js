function createPerson(firstName, lastName, pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl: pl,
    into: function () {
      console.log(
        `Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`
      );
    },
  };
}
const krishna = createPerson("krishna", "chauhan", "javascript");
const huxn = createPerson("Huxn", "Wevdev", "Golang");
console.log(krishna);
krishna.into();
console.log(huxn);
huxn.into();

// Exercise
function createVehicle(type, brand, model, year) {
  return { type, brand, model, year };
}
const vehicle1 = createVehicle("CAr", "Toyoto", "comry", 2020);
const vehicle2 = createVehicle("MotorCycle", "Honda", "Shine", 2021);
console.log(vehicle1);
console.log(vehicle2);
