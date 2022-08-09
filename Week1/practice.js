//Day 2
// 1.
function isOdd(num) {
    if ( num % 2 === 1) {
        return true 
    } else {
        return false
    }
}

function isOdd(num) {
    return num % 2 === 1
}

console.log(isOdd(2))
console.log(isOdd(3))
// 2.
function plusFive (num) {
    return num + 5
}

console.log(plusFive(10))

//3.

function threeOrSeven(num) {
    if (num % 3 === 0 || num % 7 === 0 ) {
        return true 
    } else {
        return false
    }
}

function threeOrSeven(num){ 
    return num % 3 === 0 || num % 7 === 0
}

console.log(threeOrSeven(3))
console.log(threeOrSeven(7))
console.log(threeOrSeven(2))

// 4.

function hello(str) {
    console.log("Hello, " + str)
}

hello('child')

function hello(str) {
    return "Hello, " + str 
}

console.log(hello("child"))

// 5.

function yell(str) {
    return str.toUpperCase() + "! ! !"
}

console.log(yell('Time to program'))

// 6. 

function whisper(str) {
    return "..." + str.toLowerCase() + "..."
}

console.log(whisper("Hey Anthony"))

// 7.

function isSubstring (searchString, subString) {
    if(searchString.toLowerCase().indexOf(subString.toLowerCase()) !== -1){
        return true 
    } else {
        return false
    }
}

console.log(isSubstring("Time to program", "time"))

// 8. 

function echo (string) {
    return string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase()
}

console.log(echo("Mom!"))
console.log(echo("JUMp"))

// 9. 

function isEven (num) {

        return !isOdd(num)
}


console.log(isEven(3))

// 10,

function averageOfFour(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4
}

console.log(averageOfFour(10,10,15,5))
// Day 3 
//1.

function logBetween (lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i++)
    console.log(i)
}

logBetween(-1,2)

// 2. 

function logBetweenStepper(min, max, step) {
    for (i = min; i <=  max; i += step)
    console.log(i)
}

logBetweenStepper(5,9,1)

// 3. 

function printFives(max) {
    for ( i = 0; i < max; i ++) { 
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}

printFives(20)

// 4.

function printReverse (min, max) {
    for ( i = max - 1; i > min; i--){
        console.log(i)
    }
}    

printReverse(13, 18)

// 5.

function sumNum (max) {
    let sum = 0
    for ( i = 0; i <= max; i++) {
        sum += i
    }
    return sum
}

console.log(sumNum(4))
console.log(sumNum(365))

// 7.

function isFactor(number, factor) {
    if  ( number % factor === 0) {
        return true
    } else {
        return false
    }
}

console.log(isFactor(22,2))

// 8.

function fizzBuzz(max) {
    for (i =0; i < max; i++){ 
        if (( i % 3 === 0 || i % 5 ===0 ) 
        && !( i % 3 === 0 && i % 5 === 0 )) { 
            console.log(i)
        }
    }
}

fizzBuzz(20)

// 9.

function isPrime(number) { 
    if (number < 2){
        return false
    }

    for (i = 2; i < number; i++ ){
        if(number % i === 0) {
            return false
        } 
    }
    return true 
}

console.log(isPrime(2))

// day 4
// 1.

function logEach(array) {
    for (i =0; i < array.length; i++) {
        let word = array[i]
        console.log(i + ': ' + word)
    }
}

logEach(["Anthony", "John", "Carson"])

// 2.

function range(start, end) {
    let arr = []
    
    for (i = start; i <= end; i++ ) {
    let num = i
    arr.push(num)
    }

    return arr
}

console.log(range(1,4))

// 3. 

function sumArray(array) {
    let sum = 0
    for (i = 0; i < array.length; i++) {
        let num = array[i]
        sum += num
    }
    return sum 
}

console.log(sumArray([5,4,6]))

// 4. 

function capWords(words) {
    let arr = []

    for(i = 0; i < words.length; i++) {
        let word = words[i]
        arr.push(word.toUpperCase())
    }

    return arr
}

console.log(capWords(['hello', 'boOtCaMp', 'PREP!']))

// 5.

function wordPeriods (sentence) {
    let words = sentence.split(' ')
    let arr = []

    for (i = 0; i < words.length; i++){
        let word = words[i]
        arr.push(word+ "." )
    }
    let newSen = arr.join(" ")
    return newSen
}

console.log(wordPeriods("hello world"))

//6. 

function maxValue (array) {
    let largestNum = null

    for (i = 0; i < array.length; i++) {
        let num = array[i]
        if(largestNum === null || num > largestNum) {
            largestNum = num
        }
    }
    return largestNum
}

console.log(maxValue([12,6,43,21]))
console.log(maxValue([]))

// 7. 

function myIndexOf(array, target) {
    for (i = 0; i < array.length; i++) {
        let num = array[i]
        if (target === num) {
            return console.log(array[i])
        }
    }
    return console.log(-1)
}

myIndexOf([1,2,3,4], 4)

// 8. 

function factorArray (array, number) {
    let arr = []

    for (i = 0; i < array.length; i++ ) {
        let num = array[i]
        if (number % num === 0 ) {
            arr.push(num)
        } else {
            return -1
        }
    }

    return arr
}

console.log(factorArray([3,4,5,6], 2))

// Practice Assessment #1
// 1.

function average (num1, num2) {
    return (num1 + num2) / 2
}

console.log(average(10,20))

// 2.

function tripler(array) {
    let arr = []

    for (i = 0; i < array.length; i++ ) {
        let num = array[i]
        arr.push(num * 3)
    }

    return arr
}

console.log(tripler([1,2,3]))

// 3. 

function oddRange (end) {
    let arr = []
    for (i = 0; i <= end; i++ ) {
        if (i % 2 === 1) {
            arr.push(i)
        }
    } 
    return arr
}

console.log(oddRange(6))

// day 5
//1.

function isInside(array, ele) {
    for (i = 0; i < array.length; i++){
        if (array.includes(ele)){
            return true
        } else { 
            return false
        } 
    }
}

console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'))
console.log(isInside(['chase', 'phi', 'eliot'], 'fred'))

//2.

function reverseStr(str) {
    let string = ""
    for (i = str.length - 1; i >= 0; i --) {
        string += str[i]
    }
    return string
}

console.log(reverseStr('bootcamp'))

// 3.

function luckySevens (max) {
    let arr = []

    for (i = 1; i <= max; i++) {
        if( i % 7 === 0) {
            arr.push(i)
        }
    }

    return arr 
}

console.log(luckySevens(42))

// 4. 

function everyOtherWord(sentence) {
    let split = sentence.split(' ')
    let arr = []
    for (i = 0; i < split.length; i+=2) {
        let word = split[i]
        arr.push(word)
    }
    return arr
}

console.log(everyOtherWord('the weather is wonderful'))
console.log(everyOtherWord('hello how are you doing on this lovely day'))

// 5.

// function endsInPunc(str) {
//     let puncs = ['.', ',', '!', ':', ';']
//     let lastChar = str[str.length - 1]
//     return puncs.indexOf(str[lastChar]) > -1

// }

// function wordYeller (sentence) {
//     let split = sentence.split(' ')
//     let arr = [] 

//     for (i = 0; i < split.length; i++ ) {
//         let word = split[i]
        
//         if(endsInPunc(word)){
//             arr.push(word)
//         }else {
//             let newWord = word + "!"
//              arr.push(newWord)
//         }
//     }
//     let newSen = arr.join(' ')
//     return newSen
// }

function wordYeller (sentence) {
    let arr = [] 
    let splitSen = sentence.split(' ')
    let puncs = ['.', ',', '!', ':', ';']

    for (i = 0; i < splitSen.length; i++ ) {
        let word = splitSen[i]
        let lastChar = word.slice(-1)

        if(puncs.indexOf(lastChar) !== -1) {
            arr.push(word)
        } else {
            arr.push(word + '!')
        }
    }
    let newSen = arr.join(' ')
    return newSen
}

console.log(wordYeller('Stop it now! Please, wont you stop?'))

// 5.

function arraySubstring(words, str) {
    let arr = []
    for (i = 0; i < words.length; i++ ) {
        let word = words[i] 
        if(word.includes(str)){
            arr.push(true)
        } else {
            arr.push(false)
        }
    }
    return arr
}

console.log(arraySubstring(['hello', 'history', 'helix', 'hellos'], 'hel'))

// 6, 

function evenCaps(sentence) {
    let str = ""
    for (i = 0; i < sentence.length; i++) {
        let letter = sentence[i]
        if ( i % 2 === 0) {
            str += letter.toUpperCase()
        } else {
            str += letter
        }
    }
    return str
}

console.log(evenCaps("Tom got a small piece of pie"))

// Practice Assessment #2

// Write a function reverseOddRange(start, end) that returns an array containing all
// odd numbers between 'start' and 'end'  in reverse-sequential order. Use a
// loop to do this.

// Examples:

// reverseOddRange(10, 20) => [ 19, 17, 15, 13, 11 ]
// reverseOddRange(3, 7) => [ 7, 5, 3 ]
// reverseOddRange(9, 5) => []

function reverseOddRange (start, end) {
    let arr = []
    for (i = start; i <= end; i++) {
        if(i % 2 === 1) {
            arr.unshift(i)
        }
    }
    return arr
}

console.log(reverseOddRange(10,20))

// Write a function isSquare(number) that takes in a number and returns true if the
// number is a perfect square, false otherwise. A perfect square is a number that is
// the result of squaring another number. For example, 3 * 3 is 9, so 9 is perfect
// square. 4 * 4 is 16, so 16 is a perfect square. 18 is not a perfect square.

function isSquare(number) {
    for (i = 2; i < number; i++){
        
        if (i * i === number ){
            return true
        } 
    }
    return false
}
console.log(isSquare(16))
console.log(isSquare(18))

// Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
// Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
// should be in reverse-sequential order.

// Examples:

// mysticNumbers(25) => [ 20, 18, 16, 8, 6, 4 ]
// mysticNumbers(14) => [ 8, 6, 4 ]

function mysticNumbers(max) {
    let arr = [] 
    for (i = 0; i <= max; i++) {
        if ((i % 4 === 0 || i % 6 === 0) && !(i % 4 === 0 && i % 6 === 0 )) {
            arr.unshift(i)
        }
    }
    return arr
}

console.log(mysticNumbers(25))

// Write a function fromMeToYou(sentence) that returns an string where the word 'me'
// is replaced with 'you'.

// Examples:

// fromMeToYou('that made me laugh') => 'that made you laugh'
// fromMeToYou('love me or hate me') => 'love you or hate you'

function fromMeToYou (sentence) {
    let splitSen = sentence.split(' ')
    let arr = []

    for (i = 0; i < splitSen.length; i++ ) {
        let words = splitSen[i]
        
        if(words.includes('me')) {
            arr.push('you')
        } else {
            arr.push(words)
        }
    } 
    let newSen = arr.join(' ')
    return newSen
}

console.log(fromMeToYou('that made me laugh'))
console.log(fromMeToYou('love me or hate me'))
// Write a function firstOrLast(array) that takes in an array and returns either:

// - the first element if there is an even number of elements in the array

// - the last element if there is an odd number of elemetns in the array

// You can assume the array contains at least one element.

// Examples:

// firstOrLast(['a', 'b', 'c', 'd']) => 'a'
// firstOrLast(['Jenny', 'Mary', 'Mark']) => 'Mark'

function firstOrLast (array) {

        if(array.length % 2 === 0) {
            console.log(array[0])
        } else {
            console.log(array[array.length - 1])
        }
    
}

firstOrLast(['Jenny', ' Mary', 'Mark'])
firstOrLast(['Jenny', ' Mary', 'Mark', 'Joey'])