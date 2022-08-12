/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels(string) {
    let letter = string.split('')
    let vowels = "aeiouAEIOU".split('')
    let str = ''
for( i = 0; i < letter.length; i++ ) {
        let letterValue = letter[i]

        if(vowels.indexOf(letterValue) > -1) {
           str += letterValue.toUpperCase()
        } else {
            str += letterValue.toLowerCase()
        }
    }
    return str
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
