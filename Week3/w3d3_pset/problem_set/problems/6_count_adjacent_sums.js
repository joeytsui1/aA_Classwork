/***********************************************************************
Write the function `countAdjacentSums(arr, n)` that takes an array and
number. It should count the number of times that two adjacent numbers in
an array add up to n.

Examples:

countAdjacentSums([1, 5, 1], 6) //=> 2
countAdjacentSums([7, 2, 4, 6], 7) //=> 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
***********************************************************************/

function countAdjacentSums(arr, n) {
    let counter = 0
    
    for (let i = 0; i < arr.length; i ++ ) {
        if (arr[i] + arr[i+1] === n) {
            counter += 1
        }
    }
    return counter
}

function countAdjacentSums (arr, n) {
    let counter = 0

    for (let i = 0; i < arr.length; i++ ) {
        let ele = arr[i]

        if (ele + arr[i+1] === n) {
            counter += 1
        }
    }
    return counter
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countAdjacentSums;
