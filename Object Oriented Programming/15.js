/*
    FCC Version - 7.0
    Understand Where an Object’s Prototype Comes From
    Task - 15 / 26
*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);
