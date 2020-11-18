/*
    FCC Version - 7.0
    Set the Child's Prototype to an Instance of the Parent
    Task - 19 / 26
*/

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
