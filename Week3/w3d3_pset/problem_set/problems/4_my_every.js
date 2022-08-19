/***********************************************************************
Write a function `myEvery(arr, cb)` that takes in an array and a
callback. The function should call the cb for every element of the array.
The function should return true only if the callback returns true when
passed in every the element of the array. The function should return
false otherwise.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

myEvery([10, 4, 8, 20], isEven); // => true
myEvery([2, 2, 10, 11, 12], isEven); // => false
***********************************************************************/

function myEvery(arr, cb) {

  for (let i = 0; i < arr.length; i ++ ) {
    let ele = arr[i] 

    if (cb(ele) === false) {
      return false
    } 
  }
  return true
}

function myEvery (arr, cb) {
  for (let i = 0; i < arr.length; i ++ ) {
    let ele = arr[i]

    if(cb(ele) === false) { // if it finds one false in the array then the function will return false
      return false
    }
  }
  return true // if it goes through the full for loop and its all true then the function will return true 
}

function myEvery (arr, cb) {
  for (let i = 0; i < arr.length; i ++ ) {
    let ele =arr[i]

    if (cb(ele) === false) {
      return false
    }
  }
  return true
}
myEvery([10, 4, 8, 20], isEven)
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = myEvery;
