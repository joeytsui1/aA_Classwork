/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/

function isPrime(number) {
if ( number < 2 ) {
  return false 
}

for ( i = 2; i < number; i++ ) {
    if(number % i === 0 ){
      return false
    }
  }
  return true 
}

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
let arr = []
let num = 2
while (arr.length < n){
  if(isPrime(num)) {
    arr.push(num)
    } 
    num += 1
  }
  return arr
}
// function firstNPrimes(n) { // 4
//   let nPrimes = [];

// for (let i = 2; nPrimes.length < n; i++) {
//   if (isPrime(i)) {
//     nPrimes.push(i);
//     }
//  return nPrimes
//   }
// }



// console.log(firstNPrimes(4))
/***********************************************************************
Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

function sumOfNPrimes(n) {
  var sum = 0;
  var primes = firstNPrimes(n);

  for (var i = 0;  i < primes.length; i ++ ) {
    sum += primes[i];
  }

  return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = {
  isPrime: isPrime,
  firstNPrimes: firstNPrimes,
  sumOfNPrimes: sumOfNPrimes
};
