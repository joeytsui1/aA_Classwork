/***********************************************************************
Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
function should return true if the arrays have different lengths. The
function should return false otherwise.

Examples:

var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

diffArrayLen(a1, a2); // => false
diffArrayLen(a1, a3); // => true
***********************************************************************/
let a1 = ['a', 'b', 'c'];
let a2 = ['w', 'x', 'y'];
let a3 = [1, 3, 7, 4];

function diffArrayLen(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return false
    } else {
        return true
    }
   // return arr1.length !== arr2.length
}

console.log(diffArrayLen(a1 , a2))
console.log(diffArrayLen(a1 , a3))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = diffArrayLen;
