// function isInside(array, ele) { 

//     if (array.indexOf(ele) > -1 ) {
//         return true
//     } else { 
//         return false
//     }
// }

// console.log(isInside(['chase', 'phi', 'elliot'], 'elliot'))

// function printReverse(str) {
// let reverseWord = ''

// for (i = str.length -1; i >= 0; i-- ) {
//     let  char = str[i]
//     reverseWord += char
// }

// return reverseWord
// }

// console.log(printReverse('bootcamp'))

// // Write a function `luckySevens(max)` that returns an array of all numbers up
// // to max (inclusive) that are divisible by 7.
// //
// // Examples:
// //
// // luckySevens(25); // => [ 7, 14, 21 ]
// // luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

// function luckySevens(max) {
// let arr4 = []

// for (i = 1; i <= max; i++) {
//     if ( i % 7 === 0 ) {
//         arr4.push(i)
//     } 
// }
// return arr4
// }

// console.log(luckySevens(25))
// console.log(luckySevens(42))

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine (element, num) {
    let arr = []

    for (i = 0; i < num; i++){
        arr.push(element)
    }

    return arr 
}
console.log(copyMachine('candy', 2))


// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]


function everyOtherWord(sentence) { 
    let arr = []

    let splitSen = sentence.split(' ')
    
    for (i = 0; i < splitSen.length; i+=2){
        let word = splitSen[i]
        arr.push(word)
    }

    return arr

}

console.log(everyOtherWord('hello how are you doing on this lovely day'))

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true

function wordYeller(sentence) {
    

}

// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

function arraySubstring(words, str) { 
    let arr =[]
    
    
    for(i = 0; i < words.length; i++){
        let word = words[i]
        if (word.includes(str)) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }
    return arr

}

console.log(arraySubstring(["hello", "history", "helix", "hellos"], "hel"))
console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"))

// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"

function evenCaps (sentence) { 
    let str = ''
    for (i = 0; i < sentence.length; i+=1){
        if (i % 2 === 0){
            str += sentence[i].toUpperCase()
        } else {
            str += sentence[i]
        }

    }
    return str
}

console.log(evenCaps("Tom got a small piece of pie"))
console.log(evenCaps("the book is in front of the table"))