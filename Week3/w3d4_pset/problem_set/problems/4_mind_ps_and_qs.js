/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. Think of
using a strategy similar to maxValue. This can also be solved using a
single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
***********************************************************************/


// function mindPsAndQs(str) {
//     let counter = 0
//     let highest = 0

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]

//         if (char === 'P' || char === 'Q') {
//             counter += 1
//             if (counter > highest) {
//                 highest = counter
//             }
//         } else {
//             counter = 0
//         }
//     }
//     return highest
// }

function mindPsAndQs (str) {
    let counter = 0
    let highest = 0

    for (let i = 0; i < str.length; i++ ) {
        let char = str[i]

        if ((char === "P") || (char === "Q")) {
            counter += 1
            if (counter > highest){
                highest = counter 
            }
        } else {
            counter = 0
        }
    }
    return highest
}
console.log(mindPsAndQs('BOOTCAMP'))
console.log(mindPsAndQs('PPPXQPPPQ'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mindPsAndQs;
