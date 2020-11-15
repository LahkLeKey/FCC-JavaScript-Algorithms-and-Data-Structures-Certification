/*
    FCC Version - 7.0
    Combine Arrays with the Spread Operator
    Task - 9 / 20
*/

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());
