/*
    FCC Version - 7.0
    Return Largest Numbers in Arrays
    Task - 5 / 16
*/

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
