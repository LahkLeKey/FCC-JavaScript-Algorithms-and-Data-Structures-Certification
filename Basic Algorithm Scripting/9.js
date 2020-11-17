/*
    FCC Version - 7.0
    Finders Keepers
    Task - 9 / 16
*/

function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
