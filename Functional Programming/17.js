/*
    FCC Version - 7.0
    Sort an Array Alphabetically using the sort Method
    Task - 17 / 24
*/

function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
