/*
    FCC Version - 7.0
    Implement map on a Prototype
    Task - 8 / 24
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Only change code below this line
  this.forEach((arr) => newArray.push(callback(arr)));
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
