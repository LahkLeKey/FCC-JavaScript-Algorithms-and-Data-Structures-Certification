/*
    FCC Version - 7.0
    Comparison with the Equality Operator
    Task - 59 / 111
    Goal : Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.
*/

// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
