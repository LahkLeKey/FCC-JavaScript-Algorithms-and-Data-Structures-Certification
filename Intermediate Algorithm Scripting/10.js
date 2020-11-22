/*
    FCC Version - 7.0
    Sorted Union
    Task - 10 / 21
*/

const uniteUnique = (...arr) => [...new Set(arr.flat())];
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
