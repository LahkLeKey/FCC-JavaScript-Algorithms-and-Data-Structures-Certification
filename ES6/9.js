/*
    FCC Version - 7.0
    Use the Rest Parameter with Function Parameters
    Task - 9 / 31
*/

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
