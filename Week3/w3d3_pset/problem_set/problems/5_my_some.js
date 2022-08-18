/***********************************************************************
Write a function `mySome(arr, cb)` that takes in an array and a callback.
The function should call the callback for every element of the array.
The function should return true if the callback returns true when passed
in any element of the array. The function should return false otherwise.

Example:

function isNegative(num) {
  return num < 0;
}

mySome([10, -10, 11, 4], isNegative); // => true
mySome([-10, -10, -11, -4], isNegative); // => true
mySome([2, 4, 6, 8], isNegative); // => false
***********************************************************************/

function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++ ) {
    let ele = arr[i]

    if (cb(ele) === true) {
      return true
    } 
  }
  return false
}

function isNegative(num) {
  return num < 0;
}

function mySome (arr ,cb) {
  for (let i = 0; i < arr.length; i++ ) {
    let ele = arr[i]

    if (cb(ele) === true) { // the function will return true and soon as one negative is found in the array
      return true
    }
  }return false // the function will return false if all the ele in the array is positive 
}
mySome([10, -10, 11, 4], isNegative);
mySome([2, 4, 6, 8], isNegative);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mySome;