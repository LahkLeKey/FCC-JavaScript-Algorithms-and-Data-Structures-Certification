/*
    FCC Version - 7.0
    Chunky Monkey
    Task - 16 / 16
*/

function chunkArrayInGroups(arr, size) {
  const _arr = [];
  for (let i = 0; i < arr.length; i += size) {
    _arr.push(arr.slice(i, i + size));
  }
  return _arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
