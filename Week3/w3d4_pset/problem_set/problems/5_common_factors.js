/***********************************************************************
Write a function commonFactors(num1, num2) that returns an array that
contains the common factors between both numbers. A factor is a number
that divides another number with no remainder.

Examples:

commonFactors(12, 50); // => [ 1, 2 ]
commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
commonFactors(11, 22); // => [ 1, 11 ]
commonFactors(45, 60); // => [ 1, 3, 5, 15 ]
***********************************************************************/

function commonFactors(num1, num2) {
    let arr = []

    for (let i = 1; i <= num1 * num2; i++ ) {
        if ((num1 % i === 0) && (num2 % i === 0)) {
            arr.push(i)
        }
    }
    return arr
}

function commonFactors (num1, num2) {
    let arr = []

    for (let i = 0; i < num1 * num2; i++ ) {
        if ((num1 % i === 0) && (num2 % i === 0)) {
            arr.push(i)
        }
    }
    return arr
}
console.log(commonFactors(12, 50))
console.log(commonFactors(45, 60))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonFactors;
