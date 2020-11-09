/*
    FCC Version - 7.0
    Accessing Nested Objects
    Task - 93 / 111
*/

// Setup
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
