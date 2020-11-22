/*
    FCC Version - 7.0
    DNA Pairing
    Task - 8 / 21
*/

function pairElement(str) {
  var pairs = { A: "T", T: "A", C: "G", G: "C" };
  var arr = str.split("");
  return arr.map((x) => [x, pairs[x]]);
}

pairElement("GCG");
