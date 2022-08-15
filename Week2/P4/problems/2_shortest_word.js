/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  let words = sentence.split(" ") 
  let shortest = null

  for (i = 0; i < words.length; i ++) {

      if ( shortest === null || words[i].length < shortest.length) {
        shortest = words[i]
      }
  }
  return shortest
}

function shortestWord (sentence) {
  let words = sentence.split(' ')
  let shortest = null 

  for ( let i = 0; i < words.length; i ++ ) {
    let word = words[i]

    if (shortest === null || word.length < shortest.length) {
      shortest = word
    }
  }
  return shortest
}

console.log(shortestWord('app academy is cool'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
