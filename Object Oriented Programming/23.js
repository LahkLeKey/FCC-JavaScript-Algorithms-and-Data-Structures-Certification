/*
    FCC Version - 7.0
    Use a Mixin to Add Common Behavior Between Unrelated Objects
    Task - 23 / 26
*/

let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("Gliding!");
  };
};
glideMixin(bird);
glideMixin(boat);
