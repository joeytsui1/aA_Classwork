/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/
function evenSum (num) {
  let sum = 0

  for (let j = 0; j <= num; j++ ) {

    if (j % 2 === 0) {
      sum += j
    }
  }
  return sum
}

function evenSumArray(array) {
  let arr = []

  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    
    arr.push(evenSum(num))
  }
  return arr
}
console.log(evenSumArray([6, 7, 5]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenSumArray;
