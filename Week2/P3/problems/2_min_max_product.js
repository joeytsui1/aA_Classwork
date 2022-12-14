/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

function minMaxProduct(array){
    let min = array[0]
    let max = array[0]
    let sum = 0

    for ( let i = 0; i < array.length; i++ ) {
      let num = array[i]

      if (num > max) {
        max = num
      }

      if (num < min) {
        min = num
      }
    }
    return sum = min * max
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
