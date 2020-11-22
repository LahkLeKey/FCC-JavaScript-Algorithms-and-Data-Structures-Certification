/*
    FCC Version - 7.0
    Drop it
    Task - 15 / 21
*/

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
