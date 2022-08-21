/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.

Example:

splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
***********************************************************************/

function splitHalfArray(array) {
    let mid = Math.floor(array.length/2)

    if (array.length % 2 === 0) {
        return [array.slice(0, mid), array.slice(mid)]
    } else {
        return [array.slice(0, mid), array.slice(mid + 1)]
    }
}
console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = splitHalfArray;
