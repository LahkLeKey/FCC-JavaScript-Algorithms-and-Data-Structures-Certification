/*
    FCC Version - 7.0
    Wherefore art thou
    Task - 4 / 21
*/

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  return collection.filter(function (obj) {
    return keys
      .map(function (key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function (a, b) {
        return a && b;
      });
  });
  // Only change code above this line
  //   return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
