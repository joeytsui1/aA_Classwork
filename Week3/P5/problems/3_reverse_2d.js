/*******************************************************************************
Write a function reverse2D(array) that takes in a 2D array of strings. The function
should return a string representing the elements of the array in reverse order.

Examples:

var arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) => 'ihgfedcba'


var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) => 'PatrickOscarMikeMattJulian'

*******************************************************************************/
var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];

// function reverse2D(array) {
//   let str = ''

//   for (let i = array.length-1; i >= 0; i-- ) { // starts the loop at the last array in the outer array

//     for (let j = array[i].length -1 ; j >= 0; j--) { // starts the loop at the last ele of the inner arrays

//       str += array[i][j]
//     }
//   }
//   return str
// }

// function reverse2D (array) {
//   let str = ''

//   for (let i = array.length -1; i >= 0; i--) {
//     for (let j = array[i].length - 1; j >= 0; j-- ) {
//       str += array[i][j]
//     }
//   }
//   return str
// }

function reverse2D (arr) {
  let str = ''

  for (let i = arr.length -1; i >= 0; i-- ) {
    for (let j = arr[i].length -1; j >= 0; j--) {
      str += arr[i][j]
    }
  }
  return str
}
console.log(reverse2D(arr2))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverse2D;
