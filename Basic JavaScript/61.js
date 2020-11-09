/*
    FCC Version - 7.0
    Practice comparing different values
    Task - 61 / 111
    Goal : The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.
*/

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
