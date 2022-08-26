/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/

// function nextPrimeArray(array) {
//   let primeArray = [2,3,5,7,11,13,17]
//   let arr = []

//   for (let i = 0; i < array.length; i++) {
//     let num = array[i]

//     if(primeArray.indexOf(num) !== -1) {
//       arr.push(primeArray[(primeArray.indexOf(num) + 1)])
//     } else {
//       arr.push(num)
//     }
//   }
//   return arr
// }

function isPrime (num) {
  if (num < 2) return false

  for (let i = 2; i < num; i++) {
    if (num % i === 0 ) {
      return false
    }
  }
  return true
}

function nextPrime (num) {
  for (let i = num + 1; true; i++) {
    if (isPrime(i)) {
      return i
    }
  }
}

function nextPrimeArray (array) {
  let arr = []

  for (let i = 0; i < array.length; i++) {
    let num = array[i]

    if (isPrime(num)) {
      arr.push(nextPrime(num))
    } else {
      arr.push(num)
    }
  }
  return arr
}
console.log(nextPrimeArray([-4, 2, 5, 4, 11]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = nextPrimeArray;
