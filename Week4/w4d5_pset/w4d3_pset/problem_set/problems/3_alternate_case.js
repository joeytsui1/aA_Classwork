/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

function alternateCase(str) {
    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()

        if (i % 2 === 0) {
            newStr += char.toUpperCase()
        } else {
            newStr += char.toLowerCase()
        }
    }
    return newStr
}

function alternateCase (str ) {
    return str.split(' ').map((ele, idx) => {
        if (idx % 2 === 0) {
            return ele.toUpperCase()
        } else {
            return ele.toLowerCase()
        }
    })
}
console.log(alternateCase('BOOTCAMPPREP'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = alternateCase;
