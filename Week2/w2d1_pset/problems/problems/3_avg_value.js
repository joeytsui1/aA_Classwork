/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

function avgValue(array) {
    let sum = 0
    for (i = 0; i < array.length; i++) {
        let num = array[i]
        sum += num
    }
    let avg = sum / array.length
    return avg
    
}
console.log(avgValue([10,20]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = avgValue;
