/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

function hipsterfyWord(word) {
    let vowels = "aeiouAEIOU".split('')

  for ( let i = word.length - 1; i >= 0; i-- ) {
      let char = word[i]

      if ( vowels.indexOf(char) !== -1) {
        let hipsterWord = word.slice(0, i) + word.slice(i + 1)
        return hipsterWord
      }
  }
  return word
}


function hipsterfyWord(word) {
  let vowels = "aeiouAEIOU"

  for (let i = 0; i < word; i++) {
    let char = word[i] 

    if (vowels.indexOf(char) !== -1) {
      let newWord = word.slice(0, i) + word.slice(i + 1)
      return newWord
    }
  }
  return word
}

function hipsterfyWord(word) {
  let vowels = "aeiouAEIOU".split('')

  for (let i = 0; i < word.length; i ++ ) {
    let letter = word[i]

    if (vowels.indexOf(letter) !== -1) {
      let newWord = word.slice(0, i ) + word.slice(i + 1)
      return newWord
    } 
  }
  return word 
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
