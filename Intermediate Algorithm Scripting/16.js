/*
    FCC Version - 7.0
    Steamroller
    Task - 16 / 21
*/

function steamrollArray(arr) {
  let flatArr = [].concat(...arr);
  return flatArr.some(Array.isArray) ? steamrollArray(flatArr) : flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
