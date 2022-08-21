/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/


// function variableNameify (words) {
//   let str = ''

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i]

//     if (i === 0) {
//       str += word.toLowerCase()
//     } else {
//       str += word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
//     }
//   }
//   return str
// }

function variableNameify (words) {
  let str = ''

  for (let i = 0; i < words.length; i++) {
    let word = words[i]

    if (i === 0) {
      str += word.toLowerCase()
    } else {
      str += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    }
  }
  return str
}
console.log(variableNameify(['is', 'prime']))
console.log(variableNameify(['MaX', 'VALUE']))
console.log(variableNameify(['remove', 'last', 'vowel']))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
