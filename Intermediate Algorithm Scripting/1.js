/*
    FCC Version - 7.0
    Sum All Numbers in a Range
    Task - 1 / 21
*/

function sumAll(arr) {
  const start = arr[0];
  const end = arr[1];
  const count = Math.abs(start - end) + 1;
  return ((start + end) * count) / 2;
}

sumAll([1, 4]);
