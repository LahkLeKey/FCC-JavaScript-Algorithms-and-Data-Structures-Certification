/*
    FCC Version - 7.0
    Understanding Undefined Value returned from a Function
    Task - 53 / 111
    Goal : Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
*/

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
