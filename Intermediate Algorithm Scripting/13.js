/*
    FCC Version - 7.0
    Sum All Primes
    Task - 13 / 21
*/

function sumPrimes(num) {
  function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return x !== 1 && x !== 0;
  }

  let i = 1,
    sum = 0;

  while (i <= num) {
    if (isPrime(i)) sum += i;
    i++;
  }

  return sum;
}

sumPrimes(10);
