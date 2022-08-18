/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/

function hasAllVowels(str) {
    let vowels = "aeiou".split('')

    for(let i = 0; i < vowels.length; i ++) {
        if (!str.includes(vowels[i])) {
            return false
        } 
    }
    return true
}
console.log(hasAllVowels('have you gone biking?'))
console.log(hasAllVowels('bootcamp prep'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasAllVowels;
