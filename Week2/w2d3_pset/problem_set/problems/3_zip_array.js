/***********************************************************************
Write a function `zipArray(arr1, arr2)` that takes in two arrays and
"zips" them together by returning a single 2D-array. Assume that both
input arrays have the same length.

Examples:

var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

var result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
***********************************************************************/
var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

var result = zipArray(a1, a2);

function zipArray(arr1, arr2) { 
    let pairs = []

    for (i = 0; i < arr1.length; i++ ) {
        let iValue = arr1[i]
        let jValue = arr2[i]
        pairs.push([iValue, jValue])
        }
        return pairs
    }

    console.log(result)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = zipArray;
