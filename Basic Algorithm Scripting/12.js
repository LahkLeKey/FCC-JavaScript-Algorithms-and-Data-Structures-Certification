/*
    FCC Version - 7.0
    Slice and Splice
    Task - 12 / 16
*/

function frankenSplice(arr1, arr2, n) {
  const _arr = arr2.slice();
  _arr.splice(n, 0, ...arr1);
  return _arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
