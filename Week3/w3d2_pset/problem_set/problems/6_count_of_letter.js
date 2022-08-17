/***********************************************************************
Write a function `countOfLetter(string, char)` that takes in a string
and a character and returns the number of times that character appears
in the string

Examples:

countOfLetter('mississippi', 's'); // => 4
countOfLetter('MISSISSIPPI', 'p'); // => 2
countOfLetter('BOOTCAMP', 't'); // => 1
***********************************************************************/

// function countOfLetter(string, char) {
//     let count = 0

//     for (let i = 0; i < string.length; i++) {
//         let character = string[i].toLowerCase()

//         if(character === char) {
//             count += 1
//         }
//     }
//     return count
// }

function countOfLetter (string, char) {
    let count = 0

    for(let i = 0; i < string.length; i++ ) {
        let ele = string[i]

        if (ele === char) {
            count += 1
        }
    }
    return count
}

console.log(countOfLetter('mississippi', 'p'))
console.log(countOfLetter('mississippi', 's'))
console.log(countOfLetter('mississippi', 'p'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countOfLetter;
