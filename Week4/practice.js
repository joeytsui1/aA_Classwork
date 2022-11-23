// // 1.

// function mapByKey (array, key) {
//     let newArr = []

//     for (let i = 0; i < array.length; i++) {
//         newArr.push(arr[i][key])
//     }
//     return newArr
// }

// // 2.

// function mapByName (arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i][name])
//     }
//     return newArr
// }

// // 3.

// function handScore (hand) {
//     let points = {
//         'A': 4,
//         'K': 3,
//         'Q': 2,
//         'J': 1
//     }

//     let sum = 0

//     for (let i = 0; i < hand.length; i++) {
//         let char = hand[i]

//         if(char.toUpperCase() in points) {
//             sum += points[char.toUpperCase()]
//         }
//     }
//     return sum
// }

// // 4.

// function frequentLetters (string) {
//     let obj = {}
//     let arr = []

//     for (let i = 0; i < string.length; i++) {
//         let char = string[i]

//         if (obj[char] === undefined) {
//             obj[char] = 1
//         } else {
//             obj[char] += 1
//         }
//     }

//     for (let key in obj) {
//         if (obj[key] > 2) {
//             arr.push(key)
//         }
//     }
//     return arr
// }

// // 5.

// function sameCharCollapse (string) {
//     let reducible = true

//     while (reducible) {
//         let charArr = string.split('')
//         reducible = false

//         for (let i = 0; i < charArr.length-1; i++) {
//             if (charArr[i] === charArr[i+1]) {
//                 charArr[i] = ""
//                 charArr[i+1] = ""
//                 reducible = true
//             }
//         }
//         string = charArr.join('')
//     }
//     return string
// }

// // 6.
// function removeConsonant (word) {
//     let newWord = ''
//     let vowels = 'aeiou'

//     for (let i = 0; i < word.length; i++) {
//         let char = word[i]
//         if (vowels.includes(char)) {
//             return newWord = word.slice(i)
//         }
//     }
//     return word
// }

// function consonantCancel (sentence) {
//     let words = sentence.split(' ')
//     let newStr = []

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i]

//         newStr.push(removeConsonant(word))
//     }
//     return newStr.join(' ')
// }

// //7.

// function anagram (word1, word2) {
//     let obj = {}

//     for (let i = 0; i < word1.length; i++) {
//         let char1 = word1[i]
//         let char2 = word2[i]

//         if (obj[char1] === undefined) {
//             obj[char1] = 1
//         } else {
//             obj[char1] += 1
//         }
//         if (obj[char2] === undefined) {
//             obj[char2] = -1
//         } else {
//             obj[char2] += -1
//         }
//     }
//     for (let key in obj) {
//         if (obj[key] != 0) {
//             return false
//         }
//     }
//     return true
// }

// // 8

// function allElseEqual (array) {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i]
//         sum += num
//     }
//     let avg = sum / 2

//     if (array.includes(avg)) {
//         return avg
//     } else {
//         return null
//     }
// }

function foo () {
    console.log ("a")
    bar()
    console.log("e")
}

function bar () {
    console.log('b')
    baz()
    console.log("d")
}

function baz() {
    console.log("c")
}

foo()

function letsJam() {
    // letsJam's scope
    let rand = 3;
  
    if (true) {
      const rand = 2;
    }
  
    if (true) {
      let rand = 1;
    }
  
    if (true) {
      const rand = "let's jam!";
    }
  
    return rand;
  }
  
  letsJam(); // ???