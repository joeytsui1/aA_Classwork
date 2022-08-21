/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/

// function threeInARow(arr) {
//     let obj = {}

//     for (let i = 0; i < arr.length; i++ ) {
//         let ele = arr[i]

//         if(obj[ele] === undefined) {
//             obj[ele] = 1
//         } else {
//             obj[ele] += 1
//         }

//         if (obj[ele] === 3) {
//             return true
//         } 
//     }   
//     return false

// }

// function threeInARow (arr) {
//     let obj = {}
    
//     for (let i = 0; i < arr.length; i ++ ) {
//         let ele = arr[i]

//         if (obj[ele] !== undefined) {
//             obj[ele] = 1
//         } else {
//             obj[ele] += 1
//         }

//         if (obj[ele] === 3) {
//             return true
//         }
//     }
//     return false
// }
function threeInARow (arr) {
    for (let i = 0; i < arr.length; i ++) {
      if ((arr[i] === arr[i + 1]) && (arr[i] === arr[i + 2])) {
        return true
      }
    }
    return false
  }

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]))
console.log(threeInARow([10, 9, 20, 33, 3, 3]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeInARow;
