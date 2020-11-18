/*
    FCC Version - 7.0
    Use Closure to Protect Properties Within an Object from Being Modified Externally
    Task - 24 / 26
*/

function Bird() {
  let weight = 15;
  this.getWeight = () => weight;
}
