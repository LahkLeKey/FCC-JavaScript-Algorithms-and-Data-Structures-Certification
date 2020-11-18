/*
    FCC Version - 7.0
    Change the Prototype to a New Object
    Task - 13 / 26
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat() {
    console.log("nom nom nom");
  },
  describe() {
    console.log("My name is " + this.name);
  },
};
