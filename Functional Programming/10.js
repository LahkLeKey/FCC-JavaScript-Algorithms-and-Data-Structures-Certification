/*
    FCC Version - 7.0
    Implement the filter Method on a Prototype
    Task - 10 / 24
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  var newArray = [];
  this.forEach(function (that) {
    if (callback(that) == true) {
      newArray.push(that);
    }
  });
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});
