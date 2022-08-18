/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/
function wordss (word, char) {
    let counter = 0

    for (let i = 0; i < word.length; i++ ) {
        if (word[i] === char) {
            counter += 1
        }
    }
    return counter
}

function favoriteWord(favoriteLetter, sentence) {
    
    let words = sentence.split(' ')
    let faveWord = ''
    for (let i = 0; i < words.length; i ++ ) {
        let word = words[i]

        if (wordss (faveWord, favoriteLetter) < wordss(word,favoriteLetter)){
            faveWord = word
        }
    }
    return faveWord
}

console.log(favoriteWord('p', 'sinful caesar sipped his snifter'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
