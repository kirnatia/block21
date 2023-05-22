class Home {
  constructor(rooms, bathrooms, squareFeet) {
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.squareFeet = squareFeet;
  }

  getInfo() {
    return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.squareFeet} square feet.`;
  }
}
const myHome = new Home(3, 2, 1500);
console.log(myHome.getInfo());

class SingleFamilyHome extends Home {
  constructor(rooms, bathrooms, squareFeet, yardSize) {
    super(rooms, bathrooms, squareFeet);
    this.yardSize = yardSize;
  }
  getInfo() {
    return `${super.getInfo()} It has a ${this.yardSize} square foot yard.`;
  }
}
const mySingleFamilyHome = new SingleFamilyHome(4, 3, 2000, 5000);
console.log(mySingleFamilyHome.getInfo());

class Apartment extends Home {
  constructor(rooms, bathrooms, squareFeet, floor) {
    super(rooms, bathrooms, squareFeet);
    this.floor = floor;
  }

  getInfo() {
    return `${super.getInfo()} It is on floor ${this.floor}.`;
  }
}

const myApartment = new Apartment(2, 1, 1000, 3);
console.log(myApartment.getInfo());
// Output: This home has 2 rooms, 1 bathroom, and is 1000 square feet. It is on floor 3.



const animal = {
  eat: function () {
    console.log('Eating ...');
  }
};

const dog = {
  bark: function () {
    console.log('Woof!');
  }
};

dog.__proto__ = animal;
dog.eat();

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  birthday() {
    return "${ this.name } is ${ this.age } years old";
  }
}
class Dog extends Pet {
  constructor(name, age, bread) {
    super(name, age);
    this.breed - breed;
  }
  bark() {
    return "${this.name} is barking!"
  }
}
class Cat extends Pet {
  constructor(name, age, furColor) {
    super(name, age);
    this.furColor = furColor;
  }
  meow() {
    return "${this.name} is meowing!"
  }
}