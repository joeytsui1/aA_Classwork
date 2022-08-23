/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

// function vowelShift(sentence) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let newStr = ''

//     for (let i = 0; i < sentence.length; i ++) {
//         let char = sentence[i]

//         if (vowels.indexOf(char) > -1) {
//             newStr += vowels[(vowels.indexOf(char) + 1) % 5]
//         } else {
//             newStr += char
//         }
//     }
//     return newStr
// }

function vowelShift (sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    let str = ""

    for (let i = 0; i < sentence.length; i++ ) {
        let char = sentence[i]

        if (vowels.indexOf(char) > -1) {
            str += vowels[(vowels.indexOf(char) + 1) % 5]
        } else {
            str += char
        }
    }
    return str
}
console.log(vowelShift('hello world'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = vowelShift;
