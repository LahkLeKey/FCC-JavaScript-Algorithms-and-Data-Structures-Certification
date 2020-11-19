/*
    FCC Version - 7.0
    Use the some Method to Check that Any Elements in an Array Meet a Criteria
    Task - 23 / 24
*/

function checkPositive(arr) {
  // Only change code below this line
  return arr.some((elem) => elem > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
