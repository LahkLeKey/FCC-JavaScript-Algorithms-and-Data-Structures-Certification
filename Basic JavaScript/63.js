/*
    FCC Version - 7.0
    Comparison with the Strict Inequality Operator
    Task - 63 / 111
    Goal : Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17
*/

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
