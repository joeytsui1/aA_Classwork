/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
// function lastVowelFunc (word) {
//     let vowels = "aeiou"

//     for (let i = word.length -1; i >= 0; i--) {
//         let char = word[i]
//         if (vowels.includes(char)) {
//             return i
//         }
//     }
// }

// function revHipWord (word) {
//     let vowels = "aeiou"
//     let lastIndex = lastVowelFunc(word)
//     let newWord = ''

//     for (let i = 0; i < word.length; i++) {
//         let char = word[i]

//         if ((!vowels.includes(char)) || i === lastIndex) {
//             newWord += char
//         }
//     }
//     return newWord
// }

// function reverseHipsterfy(sentence) {
    
//     let arr = []
//     let senArr = sentence.split(' ')

//     for (let i = 0; i < senArr.length; i++) {
//         let word = senArr[i]

//         arr.push(revHipWord(word))
//     }
//     return arr.join(' ')
// }
function lastVowel (word) {
    let vowels = "aeiou"

    for (let i = word.length-1; i >= 0;  i--) {
        let char = word[i]

        if (vowels.includes(char)) {
            return i
        }
    } 
}

function removeVowel (word) {
    let vowels = "aeiou"
    let newWord = ""
    let lastVowels = lastVowel(word)

    for (let i = 0; i < word.length; i++) {
        let char = word[i]

        if (!vowels.includes(char) || i === lastVowels) {
            newWord += char
        }
    }
    return newWord
}


function reverseHipsterfy (sentence) {
    let sen = sentence.split(' ')
    let arr = []


    for (let i = 0; i < sen.length; i ++) {
        let word = sen[i]

        arr.push(removeVowel(word))
    }
    return arr.join(' ')
}
console.log(reverseHipsterfy("turtle cheeseburger fries"))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
