/*
    FCC Version - 7.0
    Iterate Through the Keys of an Object with a for...in Statement
    Task - 18 / 20
*/

function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}
