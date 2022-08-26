/*******************************************************************************
Write a function primeFactors(n) that takes in a number, `n`. The function should
return an array containing all factors of `n` that are prime. A factor is a number
that divides another.

Examples:

primeFactors(10) => [ 2, 5 ]
primeFactors(24) => [ 2, 3 ]
primeFactors(30) => [ 2, 3, 5 ]
primeFactors(11) => [11]
*******************************************************************************/
function isPrime (num) {
  if (num < 2) {
    return false
  }

  for (let i = 2; i < num; i++ ) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function primeFactors(n) {
  let arr = []

  for (let i = 0; i <= n; i ++) {
    if (isPrime(i)){
      if (n % i === 0) {
        arr.push(i)
      }
    }
  }
  return arr
}

function isPrime (num) {
  if ( num < 2 ) return false

  for (let i = 2 ; i < num; i ++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function primeFactors (num) {
  let arr = []

  for (let i = 0; i < num; i ++ ) {
    if (isPrime(i)) {
      if (num % i === 0) {
        arr.push(i)
      }
    }
  }
  return arr
}
console.log(primeFactors(10))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = primeFactors;
