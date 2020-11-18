/*
    FCC Version - 7.0
    Use an IIFE to Create a Module
    Task - 26 / 26
*/

let funModule = (() => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => {
        true;
      };
    },
    singMixin: (obj) => {
      obj.sing = () => {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();
