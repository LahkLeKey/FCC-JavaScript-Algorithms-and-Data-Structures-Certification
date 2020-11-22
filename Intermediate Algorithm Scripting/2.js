/*
    FCC Version - 7.0
    Diff Two Arrays
    Task - 2 / 21
*/

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter((item) => {
    return !arr1.includes(item) || !arr2.includes(item);
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
