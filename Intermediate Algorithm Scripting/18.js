/*
    FCC Version - 7.0
    Everything Be True
    Task - 18 / 21
*/

function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);
