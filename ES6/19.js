/*
    FCC Version - 7.0
    Write Concise Declarative Functions with ES6
    Task - 19 / 31
*/

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
