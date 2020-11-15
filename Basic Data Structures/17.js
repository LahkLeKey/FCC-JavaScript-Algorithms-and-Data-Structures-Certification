/*
    FCC Version - 7.0
    Check if an Object has a Property
    Task - 17 / 20
*/

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(obj) {
  // Only change code below this line
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) => {
    return obj.hasOwnProperty(name);
  });
  // Only change code above this line
}

console.log(isEveryoneHere(users));
