/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.

Examples:

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
***********************************************************************/
var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
var arr2 = ['2 yards', '3 feet', '10 yards']

// function toFeet(distances) {
//     let arr = []

//     for (let i = 0; i < distances.length; i++) {
//         let distance = distances[i]
//         let disArr = distance.split(' ')
//         let num = disArr[0]
//         let measurement = disArr[1]
        
//         if (measurement === "yards") {
//             let newDistance = num * 3 + " feet"

//             arr.push(newDistance)
//         } else {
//             arr.push(distance)
//         }
//     }
//     return arr
// }

function toFeet (distances) {
    let arr = []

    for (let i = 0; i < distances.length; i++) {
        let distance = distances[i]
        let disArr = distance.split(' ')
        let num = disArr[0]
        let measurement = disArr[1]

        if (measurement === "yards") {
            let newDistance = num * 3 + " feet"
            arr.push(newDistance)
        } else {
            arr.push(distance)
        }
    }
    return arr
}
console.log(toFeet(arr1))
console.log(toFeet(arr2))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = toFeet;
