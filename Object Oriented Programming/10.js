/*
    FCC Version - 7.0
    Use Prototype Properties to Reduce Duplicate Code
    Task - 10 / 26
*/

function Dog(name) {
  this.name = name;
  Dog.prototype.numLegs = 4;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
