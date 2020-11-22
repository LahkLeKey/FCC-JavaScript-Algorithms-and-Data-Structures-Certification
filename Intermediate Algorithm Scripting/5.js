/*
    FCC Version - 7.0
    Spinal Tap Case
    Task - 5 / 21
*/

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(/\s+|_+/g, "-").toLowerCase();
}

spinalCase("This Is Spinal Tap");
