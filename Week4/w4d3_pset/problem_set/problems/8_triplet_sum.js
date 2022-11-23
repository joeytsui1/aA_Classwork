/***********************************************************************
Write a function `tripletSum(array, sum)` that takes in an array of
numbers (array) and a number (sum). The function should return an array
containing unique triplets of numbers from the array that equal `sum`
when added together. You can assume that the input array contains no
repeated numbers.

Example:

var arr1 = [1, 3, 5, 2, 4];
tripletSum(arr1, 8); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]
tripletSum(arr1, 10); // => [ [ 1, 5, 4 ], [ 3, 5, 2 ] ]
tripletSum(arr1, 11); // => [ [ 5, 2, 4 ] ]
***********************************************************************/

function tripletSum(array, sum) {
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        let iValues = array[i]
        for (let j = i + 1; j < array.length; j++) {
            let jValues = array[j]
            for (let k = j + 1; k < array.length; k++) {
                let kValues = array[k]

                if ((iValues + jValues + kValues === sum)) {
                    newArr.push([iValues,jValues,kValues])
                }
            }
        }
    }
    return newArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = tripletSum;
