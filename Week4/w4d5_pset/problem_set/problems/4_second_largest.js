/***********************************************************************
Write a function `secondLargest(array)` that takes in an array of positive
numbers and returns the seconds largest number in the array. Assume that
there are no duplicate elements in the array. If there is no second
largest number, the function should return -1.

Examples:

secondLargest([3, 1, 5, 4, 7]) => 5;
secondLargest([10, 7]) => 7;
secondLargest([10]) => -1;
secondLargest([]) => -1;
***********************************************************************/

function secondLargest(array) {
    let largest = -1
    let secondLarge = -1

    for (let i = 0; i < array.length; i++) {
        let num = array[i]

        if (num > largest) {
            secondLarge = largest
            largest = num
        } else if (num > secondLarge) {
            secondLarge = num
        }
    } 
    return secondLarge
}

console.log(secondLargest([3, 1, 5, 4, 7]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = secondLargest;
