/***********************************************************************
Write a function stopWatch(totalSeconds) that takes in a number of
seconds. The function should return the time string based on that number
of seconds. The time should be formatted in hours (H), minutes (M), and
seconds(S) in the form HH:MM:SS.

Hint: the seconds and minutes count of the time should never
be greater than 59. How can we use modulo % to accomplish this?

Examples:

stopWatch(0); // => '00:00:00'
stopWatch(4); // => '00:00:04'
stopWatch(128); // => '00:02:08'
stopWatch(1234); // => '00:20:34'
stopWatch(3612); // => '01:00:12'
stopWatch(7640); // => '02:07:20'
stopWatch(86400); // => '24:00:00'
stopWatch(86522); // => '24:02:02'
stopWatch(99999); // => '27:46:39'
***********************************************************************/

// function stopWatch(totalSeconds) {
//     let secCount = totalSeconds % 60
//     if (secCount < 10) {
//         secCount = '0' + secCount
//     }

//     let minCount = Math.floor(totalSeconds/60) % 60
//     if (minCount < 10) {
//         minCount = '0' + minCount
//     }

//     let hourCount = Math.floor(totalSeconds/3600) 
//     if (hourCount < 10) {
//         hourCount = '0' + hourCount
//     }

//     return hourCount + ':' + minCount + ':' + secCount
// }


function stopWatch (totalSeconds) {
    let totalHours = Math.floor(totalSeconds / 3600)

    totalSeconds = totalSeconds - (totalHours * 3600)

    let totalMin = Math.floor(totalSeconds / 60)

    totalSeconds = totalSeconds - (totalMin * 60)

    let str = ''

    if ( totalHours < 10) {
        str += '0' + totalHours + ':'
    } else {
        str += totalHours + ":"
    }

    if (totalMin < 10) {
        str += '0' + totalMin  + ":"
    } else {
        str += totalMin + ":"
    }

    if (totalSeconds < 10) {
        str += '0' + totalSeconds
    } else {
        str += totalSeconds
    }
    return str
}
console.log(stopWatch(7640))
console.log(stopWatch(99999))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stopWatch;
