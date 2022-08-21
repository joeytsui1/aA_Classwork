/*******************************************************************************
Write a function greaterCallback(num, cb1, cb2) that takes in a number and two
callback functions. The greaterCallback function should pass the number to
both callbacks and return the result of the callback that is the greater value.

Examples:

greaterCallback(25, Math.abs, Math.sqrt) => 25
greaterCallback(16.6, Math.floor, Math.ceil) => 17
*******************************************************************************/

function greaterCallback(num, cb1, cb2) {
  if (cb1(num) > cb2(num)) {
    return cb1(num)
  } else {
    return cb2(num)
  }
}

function greaterCallback (num, cb1, cb2) {
  if (cb1(num) > cb2(num)) {
    return cb1(num)
  } else {
    return cb2(num)
  }
}

function greaterCallback (num1, cb1, cb2) {
  if (cb1(num1) > cb2(num1)) {
    return cb1(num1)
  } else {
    return cb2(num1)
  }
}

console.log(greaterCallback(25, Math.abs, Math.sqrt))
console.log(greaterCallback(16.6, Math.floor, Math.ceil))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greaterCallback;
