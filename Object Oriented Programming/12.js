/*
    FCC Version - 7.0
    Understand the Constructor Property
    Task - 12 / 26
*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
