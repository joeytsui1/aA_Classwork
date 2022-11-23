/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
it's "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') => 'FourTwo'
numsToWords('123') => 'OneTwoThree'
numsToWords('159598') => 'OneFiveNineFiveNineEight'
*******************************************************************************/

// function numsToWords(numString) {
//   let numObj = {
//     1: "One",
//     2: "Two",
//     3: "Three",
//     4: "Four", 
//     5: "Five",
//     6: "Six",
//     7: "Seven",
//     8: "Eight",
//     9: "Nine"
//   }

//   let str = ''

//   for (let i = 0; i < numString; i++) {
//     let num = numString[i]

//     if (numObj[num] !== undefined) {
//       str += numObj[num]
//     }
//   }
//   return str
// }
let numObj = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four", 
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine"
}

function numsToWords (numString) {
  let str = ''

  for (let i = 0; i < numString; i++ ) {
    let num = numString[i]

    if(numObj[num] !== undefined) {
      str += numObj[num]
    }
  }
  return str
}

console.log(numsToWords('42'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numsToWords;
