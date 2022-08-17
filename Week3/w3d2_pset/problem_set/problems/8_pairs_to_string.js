/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/
var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

// function pairsToString(arr) {
//   let str = ''

//   for (let i = 0; i < arr.length; i++ ) {
//       let pair = arr[i]
//       let char = pair[0]
//       let num = pair[1]
//     console.log(pair[0])
//     console.log(pair[1])
//       for (let j = 0; j < num; j++) {
//         str += char
//       }
//   }
//   return str
// }

function pairsToString (arr) {
  let str = ''

  for (let i = 0; i < arr.length; i++ ) {
    let pairs = arr[i]
    let char = pairs[0]
    let num = pairs[1]

    for (let j = 0; j < num; j++ ) {
      str += char
    }
  }
  return str
}

console.log(pairsToString(array2))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairsToString;
