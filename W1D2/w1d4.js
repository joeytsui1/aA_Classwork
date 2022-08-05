// //DAY 4
// // let fruits = ["apple", "Orange", "Pear"]

// let array1 = [ 1,2,3,4,5,6,7,8,9,]
// // console.log(fruits.concat(array1));
// // console.log(fruits)

// console.log(array1.slice(2, 6));
// console.log(array1.slice());

// let sentence = 'Hi my name is Jesse';

// let sentenceArray = sentence.split(' ')
// console.log(sentenceArray);

// let newSentence = sentenceArray.join('--')
// console.log(newSentence);


// let alphabet = ["a", "b",]

// function capitalizeArray(wordArr){
//     let arr = [];

//     for (let i = 0; 1 < wordArr.length; i++) {
//         let word = wordArr(i);
//         let firstChar = word[0].toUpperCase();
//         let wordFrag = word.slice(1).toLowerCase();
//         let newWord = firstChar + wordFrag
//         console.log(newWord)
//         arr.push(newWord);
//     }

//     return arr;
// }

// console.log(capitalizeArray)

// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

function logEach(array){
    for (i = 0; i < array.length; i++)
    console.log(i + ": " +array[i])
}

logEach(['Anthony', 'John', 'Carson'])

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

function range(start, end){
    let arr = []

    for (i = start; i <= end; i++) {
        arr.push(i)
    }
    
    return arr
}

console.log(range(1,4))
console.log(range(4,2))

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

function sumArray(array){
    let sum = 0;

    for (i = 0; i < array.length; i++){
        let num = array[i]
        sum+=num
    }
    return sum
}

console.log(sumArray([5,6,4]))
console.log(sumArray([7,3,9,11]))

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']

function capWords(words){
    let arr =[]

    for (i = 0; i < words.length; i++){
        let wordEx = words[i]
        let wordCap = wordEx.toUpperCase();
        arr.push(wordCap)
    }

    return arr
}

console.log(capWords(['hello', 'boOtCaMp', 'PREP!']))

// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

function wordPeriods(sentence){
    let words = sentence.split(' ')
    let arr2 = []

    for (i = 0; i < words.length; i++) {
        let word = words[i]
        let newWord = word + '.'
        arr2.push(newWord)
    }

    let newSentence = arr2.join(' ')
    return newSentence 
}

console.log(wordPeriods('hello world'))

// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43

function maxValue(array){
    let largestValue = null

    for (i = 0; i < array.length; i++){
        let num = array[i]

        if(largestValue === null || num > largestValue) {
            largestValue = num; 
        }
    }

    return largestValue
}

console.log(maxValue([12, 6, 43, 2]))

// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:
//
// myIndexOf([1,2,3,4],4) => 3
// myIndexOf([5,6,7,8],2) => -1

function myIndexOf(array, target) {
    for (i = 0; i < array.length; i++){
        let num = array[i]

        if (num === target){
            return i 
        }
    }
    return -1
}

console.log(myIndexOf([1, 2, 3, 4], 4))

// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//
// Examples:
//
// factorArray([2,3,4,5,6],20) => [2,4,5]
// factorArray([2,3,4,5,6],35) => [5]
// factorArray([10,15,20,25],5) => []

function factorArray(array, number) {
    let arr3 = []
    
    for (i = 0; i < array.length; i++){
        let num = array[i]

        if( number % num === 0) {
            arr3.push(num)
        }
    }
    return arr3
}

console.log(factorArray([2, 3, 4, 5, 6], 20))
console.log(factorArray([2,3,4,5,6], 35))
console.log(factorArray([10,15,20,25], 5))