/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.

Examples:

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

twoDimensionalSize(arr1); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

twoDimensionalSize(arr2); // => 5
***********************************************************************/
var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

 // => 5
function twoDimensionalSize(array) {
    let counter = 0

    for ( i = 0; i < array.length; i ++ ) {
      for( j = 0; j < array[i].length; j ++ ) {
        counter +=1
      }
    }
    return counter
}

console.log(twoDimensionalSize(arr2))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalSize;
