/*
    FCC Version - 7.0
    Comparison with the Strict Equality Operator
    Task - 60 / 111
    Goal : Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7
*/

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
