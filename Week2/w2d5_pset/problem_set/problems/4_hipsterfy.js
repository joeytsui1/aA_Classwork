/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/
// function removeLastVowels (word) {
//     let vowels = "aeiou".split('')

//     for ( let i = word.length - 1; i >= 0; i--) {
//         let letter = word[i]

//         if (vowels.indexOf(letter) !== -1) {
//             let newWord = word.slice(0 , i) + word.slice( i + 1)
//             return newWord
//         }
//     }
//     return word
// }


// function hipsterfy(sentence) {
//     let words = sentence.split(' ')
//     let arr = []

//     for (let i = 0; i < words.length; i++ ){
//         let word = words[i]

//         arr.push(removeLastVowels(word))
//     }
//     return arr.join(' ')
// }

function removeLastVowels (word) {
    let vowels = "aeiou".split('')
    let newWord = ''

    for ( let i = word.length -1 ; i >= 0; i -- ) {

        if (vowels.includes(word[i])) {
            newWord = word.slice(0, i) + word.slice(i + 1)
            return newWord
        }
    }
    return word
}

function hipsterfy (sentence) {
    let words = sentence.split(' ')
    let arr = []

    for (let i = 0; i < words.length; i++ ) {
        let word = words[i]

        arr.push(removeLastVowels(word))
    }
    return arr.join(' ')
}

console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"
console.log(hipsterfy("proper"))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
