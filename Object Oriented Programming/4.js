/*
    FCC Version - 7.0
    Make Code More Reusable with the this Keyword
    Task - 4 / 26
*/

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog.sayLegs();
