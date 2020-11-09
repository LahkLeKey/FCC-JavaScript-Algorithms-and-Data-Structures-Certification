/*
    FCC Version - 7.0
    Assignment with a Returned Value
    Task - 54 / 111
    Goal : Call the processArg function with an argument of 7 and assign its return value to the variable processed.
*/

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
var processed = processArg(7);
