/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

function alternateCase(str) {
    let newWord = ''

    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        if (i % 2 === 0) {
            newWord += char.toUpperCase()
        } else {
            newWord += char.toLowerCase()
        }
    }
    return newWord
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = alternateCase;
