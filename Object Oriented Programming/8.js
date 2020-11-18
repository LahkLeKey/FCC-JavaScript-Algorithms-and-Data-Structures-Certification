/*
    FCC Version - 7.0
    Verify an Object's Constructor with instanceof
    Task - 8 / 26
*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(4);
myHouse instanceof House;
