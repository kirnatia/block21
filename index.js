// Create file index.js to work in.
// Write code that defines a constructor function called Car
// Constructor must create a new object with the following properties: make, model, and year.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
// Add a method called getDescription to the Car prototype
// The method returns a string containing information about the car
Car.prototype.getDescription = function () {
  return `${this.make} ${this.model}, Year: ${this.year},`;
};

// Define the ElectricCar function as a subclass of Car.
// Include an additional property called range that represents the range of the electric car in miles.
function ElectricCar(make, model, year, range) {
  Car.call(this, make, model, year);
  this.range = range;
}

// Have the ElectricCar prototype override the getDescription method of the Car prototype with a new implementation
// that includes information about the range of the electric car.

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getDescription = function () {
  return `${Car.prototype.getDescription.call(this)} Range: ${
    this.range
  } miles`;
};

// Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300
// The getDescription method is called on the instance.
// The output will be a string containing the make, model, year, and range of the electric car.

const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myElectricCar.getDescription());
