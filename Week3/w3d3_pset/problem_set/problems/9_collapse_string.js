/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

function collapseString(str) {
    let newSen = ''

    for (let i = 0; i < str.length; i++ ) {
        let char = str[i]

        if (char !== newSen[newSen.length-1]) {
            newSen += char
        }
    }
    return newSen
}

console.log(collapseString('hello   app academy'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
