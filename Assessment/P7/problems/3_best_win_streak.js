/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

// function bestWinStreak(str) {
//   let winStreak = 0
//   let highestStreak = 0

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i]

//     if (char === "W") {
//       winStreak += 1
//       if (winStreak > highestStreak) {
//         highestStreak = winStreak
//       } 
//     } else {
//       winStreak = 0
//     }
//   }
//   return highestStreak
// }

function bestWinStreak (str) {
  let winStreak = 0
  let highestStreak = 0

  for (let i = 0; i < str.length; i ++ ) {
    let char = str[i]

    if (char === "W") {
      winStreak += 1

      if (winStreak > highestStreak ) {
        highestStreak = winStreak
      }
    } else {
      winStreak = 0
    }
  }
  return highestStreak
}
console.log(bestWinStreak('WWLWWWLWW'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;
