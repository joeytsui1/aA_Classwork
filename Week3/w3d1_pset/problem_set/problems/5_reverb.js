/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {
    let vowels = "aeiou".split('')

    for (let i = word.length -1; i >= 0; i-- ) {

        if(vowels.includes(word[i])) {
            let newWord = word + word.slice(i)
            return newWord
        }
    }
    return word
}

function reverb(word) {
    let vowels = "aeiou".split('')
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i]

        if(vowels.includes(char)) {
            let newWord = word + word.slice(i)
            return newWord
        }
    }
    return word
}

console.log(reverb('debugged'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
