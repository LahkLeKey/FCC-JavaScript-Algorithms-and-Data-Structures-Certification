/*
    FCC Version - 7.0
    Where do I Belong
    Task - 14 / 16
*/

function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}

getIndexToIns([40, 60], 50);
