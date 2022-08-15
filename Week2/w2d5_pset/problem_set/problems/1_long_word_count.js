/***********************************************************************
Write a function `longWordCount(string)` that takes in a string and
returns the number of words longer than 7 characters.

Examples:

longWordCount(""); // => 0
longWordCount("short words only"); // => 0
longWordCount("one reallylong word"); // => 1
longWordCount("two reallylong words inthisstring"); // => 2
longWordCount("allwordword longwordword wordswordword"); // => 3
longWordCount("seventy schfifty five"); // => 1
***********************************************************************/

// function longWordCount(sentence) {
//     let counter = 0
//     let words = sentence.split(' ')

//     for (let i = 0; i < words.length; i++ ) {
//         let word = words[i]

//         if (word.length > 7) {
//             counter += 1 
//         }
//     }
//     return counter
// }

// function longWordCount (sentence) {
//     let words = sentence.split(' ')
//     let counter = 0

//     for ( let i = 0; i < words.length; i++ ) {
//         let word = words[i]

//         if ( word.length > 7 ) {
//             counter += 1
//         }
//     }
//     return counter
// }

function longWordCount (sentence) {
    let words = sentence.split(' ')
    let counter = 0

    for (let i =0 ; i < words.length; i++ ) {
        let word = words[i]

        if (word.length > 7) {
            counter += 1
        }
    }
    return counter
}
console.log(longWordCount("allwordword longwordword wordswordword"))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = longWordCount;
