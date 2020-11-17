/*
    FCC Version - 7.0
    Mutations
    Task - 15 / 16
*/

function mutation(arr) {
  var a0 = arr[0].toLowerCase();
  var a1 = arr[1].toLowerCase();
  for (var i = 0; i < a1.length; i++) {
    if (a0.indexOf(a1[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
