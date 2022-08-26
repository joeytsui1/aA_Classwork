/*******************************************************************************
Write a function bigramArray(sentence) that takes in a sentence string and returns
the an array of containing all bigrams in the sentence. A bigram is a pair of
consecutive words of a sentence.

Examples:

bigramArray('today is a great day') => [ 'today is', 'is a', 'a great', 'great day' ]
bigramArray('bigrams are very useful') => [ 'bigrams are', 'are very', 'very useful' ]
*******************************************************************************/

// function bigramArray(sentence) {
//   let arr = []
//   let senArr = sentence.split(' ')

//   for (let i = 0; i < senArr.length; i++) {
//     let word = senArr[i]

//     if (i !== senArr.length -1) {
//       arr.push(word + ' ' + senArr[i+1])
//     }
//   }
//   return arr
// }

function bigramArray (sentence) {
  let arr = []
  let senArr = sentence.split(' ')

  for (let i = 0; i < senArr.length -1 ; i++) {
    let word = senArr[i]

    arr.push(word + ' ' + senArr[i + 1])
  }

  return arr
}
console.log(bigramArray('today is a great day'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bigramArray;
