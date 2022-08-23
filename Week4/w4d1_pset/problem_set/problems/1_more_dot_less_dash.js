/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/

function moreDotLessDash(str) {
    let dotCount = 0
    let dashCount = 0

    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        if (char === ".") {
            dotCount += 1
        } else if (char === "-") {
            dashCount += 1
        }
    }
    
    if (dashCount > dotCount || dashCount === dotCount) {
        return false
    }
    return true
}
console.log(moreDotLessDash('.-.-.'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = moreDotLessDash;
