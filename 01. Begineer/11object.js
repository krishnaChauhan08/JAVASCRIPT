const car = {
  type: "Fait",
  model: "500",
  color: "white",
};
console.log(car.type);
console.log((car.type = "toyoto"));
console.log(car);

car.wheels = 4;
console.log(car);
  