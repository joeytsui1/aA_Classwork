//Day 2

const twoDimensionalTotal = require("../Week2/w2d3_pset/problem_set/problems/4_two_dimensional_total")

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

// w2d2 problem set


//1. 

// Write a function `catBuilder(name, color, toys)` that returns a cat object
// object with the corresponding properties. 

function catBuilder (name, color, toys) {
    let cat = {
        name: name,
        color: color,
        toys: toys

    }

    return cat
}

function catBuilder (name , color, toys ) {
    let cat = {}

    cat.name = name
    cat.color = color
    cat.toys = toys

    return cat
}
// 2.

// Write a function `printObject(obj)` that prints out all key-value pairs
// of an object. HINT: use a for loop.

// Example:

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObj(bootcamp); // prints

// `name - App Academy`
// `color - Red`
// `population - 120`

function printObj (obj) {

    for(let key in obj) {
        let value  = obj[key]

        console.log(key + ' - ' + value)

    }
}

// 3. 
// Write a function `getFullName(person)` that takes in an person object
// and returns a string containing their full name.

function getFullName (person) {
    return person.firstName + ' ' + person.lastName
}

// 4

//Write a function `valuePair(obj1, obj2, key)` that takes in two objects
// and a key (string). The function should return an array containing the
// corresponding values of the objects for the given key.

// Examples:

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]


function valuePair (obj1, obj2, key) {
    let arr = []

    arr.push(obj1[key])
    arr.push(obj2[key])

    return arr
}

console.log(valuePair(object1, object2, 'location'))

// 5.

/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

// var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/
var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}

function doesKeyExist(obj, key ) {
    return obj[key] !== undefined
}

function doesKeyExist (obj, key) {
    if (obj[key] === undefined) {
        return false
    } else {
        return true
    }
}

console.log(doesKeyExist(obj1, "course"))

// 6. 

/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

var ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
***********************************************************************/
var ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
  ];

function adults(people) {
    let arr = [] 

    for (i = 0; i < people.length; i++ ) {
        let person = people[i]
        let age = person.age
        let name = person.name
        if(age >= 18 ) {
            arr.push(name)
        }
    }

    return arr 
}

console.log(adults(ppl))

/***********************************************************************
Write a function `hasFavoriteFood(obj, food)` that takes in an object
and a food string. The function should return true if the object has
that favorite food. See the examples below.

Examples:

var dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}

hasFavoriteFood(dog, 'sausage'); // => true
hasFavoriteFood(dog, 'cat food'); // => false

var person = {
  name: 'Al',
  favoriteFoods: ['pizza', 'burgers', 'ramen']
}

hasFavoriteFood(person, 'burgers'); // => true
hasFavoriteFood(person, 'fish'); // => false
***********************************************************************/
var dog = {
    name: 'Fido',
    favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
  }
  
  hasFavoriteFood(dog, 'sausage'); // => true
  hasFavoriteFood(dog, 'cat food'); // => false
  
  var person = {
    name: 'Al',
    favoriteFoods: ['pizza', 'burgers', 'ramen']
  }

// function hasFavoriteFood (obj, food) {
//     return obj.hasFavoriteFood.indexOf(food) > -1
// }

function hasFavoriteFood ( obj, food ) {
    return obj.favoriteFoods.includes(food)
}
console.log(hasFavoriteFood(person, 'burgers'))
console.log(hasFavoriteFood(person, 'fish'))

// 8. 

let peeps = [
    {name: "Anthony", score: 2},
    {name: "Winnie", score: 2},
    {name: "Fred", score: 2},
    {name: "Winnie", score: 2},
    {name: "Fred", score: 2},
    {name: "Anthony", score: 2},
    {name: "Winnie", score: 2}
  ];

function countScores(people) {
    let obj = {} 

    for (i = 0; i < people.length; i ++ ) {
        let peoples = people[i]
        let name = peoples.name
        let scores = peoples.score

        if(obj[name] === undefined) {
            obj[name] = scores
        } else {
            obj[name] += scores
        }
    }
    return obj
}

console.log(countScores(peeps))

// w2d3 problem set

/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop

Examples:

peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/
function peakFinder (array) {
    let arr = []

    for (i = 0 ; i < array.length; i ++ ) {
        if (i === 0 && array[i] > array[i + 1]) {
            arr.push(i)
        } else if ( i === array.length - 1 && array[i] > array (i-1)){ 
            arr.push(i)
        } else if ((array[i] > array[i + 1])&&array[i] > array[i - 1]){
            arr.push(i)
        }
    }    
    return arr
}

/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/

function divisibleByThreePairSum(array) {
    let arr = []

    for (i = 0; i < array.length; i++ ) {
        for ( j = i + 1; j < array.length; j++ ) {
            if ((array[i] + array[j]) % 3 === 0 ) {
                arr.push([i,j])
            }
        }
    }

    return arr
}

/***********************************************************************
Write a function `zipArray(arr1, arr2)` that takes in two arrays and
"zips" them together by returning a single 2D-array. Assume that both
input arrays have the same length.

Examples:

var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

var result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
***********************************************************************/
function zipArray(arr1, arr2) {
    let arr = []

    for( i = 0 ; i < arr1.length; i ++ ) {
        arr.push([arr1[i],arr2[i]])
    }

    return arr
}
/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2); // => 15
***********************************************************************/
function twoDimensionalTotal (array) {
    let sum = 0
    for ( i =0; i < array.length; i++ ) {
        for(j = 0; j < array[i].length; i++) {
            let num = array[i][j]
            sum += num
        }
    }
    return sum 
}
/***********************************************************************
Write a function `countInnerElement(arr)` that takes in a 2-D array of elements.
Each element of 'arr' is a sub array that contains multiple elements. The number
of elements contained in each sub array are not the same. We can assume each sub
array contains at least one element. We should return an object that counts
how many times each element in each sub array repeats.

// Examples:
// var arr1 = [
//   [1,2,4,5],
//   [2,7,4],
//   [1,4,5,2,7]
// ]

// countInnerElement(arr1) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

// var arr2 = [
//   ['a','b','c','d'],
//   ['a','b'],
//   ['a','c','d','a']
// ]

// countInnerElement(arr2) // => {a: 4, b: 2, c: 2, d: 2}
***********************************************************************/
function countInnerElement (arr) {
    let counter = {}

    for (i = 0; i < arr.length; i ++ ) {
        for ( j= 0; j < arr[i].length; j++ ) {
            let value = arr[i][j]

            if(counter[value] === underfined){
                counter[value] = 1
            } else {
                counter[value] += 1
            }
        }
    }
    return counter
}
/***********************************************************************
Write a function `twoDiff(array)`, given an array of numbers, return a 2-D 
array, where each of the sub array are indices of the two numbers such 
that their difference is 2. If there are no such numbers, return an empty
array.

NOTE: The pairs are unique.
HINT: Account for negative difference too!

//Example:
// twoDiff([2, 3, 4, 6, 1, 7]) // => [[0, 2], [1, 4], [2, 3]]
// twoDiff([0, 2, 4, 3, 5]) // => [[0, 1], [1, 2], [3,4]]
// twoDiff([]) // => []
***********************************************************************/
function twoDiff (array) {
    let arr = []

    for(i = 0; i < array.length; i ++ ) {
        for(j = i + 1; i < array.length; j ++ ) {
            if((array[i] - array[j] === 2) || (array[i] - array[j] === -2)) {
                arr.push([i,j])
            }
        }
    }

    return arr
}


/***********************************************************************
Write a function `arrayDiff(arr1, arr2)` that takes in two arrays. The 
function should return a new array, containing the elements of arr1 that
are not also in arr2.

Note: Assume both arrays have unique elements.
//Example:
// array1 = [1,23,2,43,3,4]
// array2 = [3, 23]
// arrayDiff(array1, array2) // => [1, 2, 43 ,4]

// array3 = ['a', 'ab', 'c', 'd', 'c']
// array4 = ['d']
// arrayDiff(array3, array4) // => ['a', 'ab', 'c', 'c']
***********************************************************************/
function arrayDiff (arr1, arr2) {
    let arr = [] 

    for( i = 0; i < arr1.length; i++ ) {
        let arr1Value = arr1[i]
        if(arr2.indexOf(arr1Value) < 0){
            arr.push(i)
        }
    }

    return arr
}
/***********************************************************************
Write a function `valueCounter(obj, val)` that takes in an object and a 
value, the function should return the number of times 'val' repeats as a
value in 'obj'.

//Example:
// obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
// valueCounter(obj1, 'Anne') // => 3

// obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
// valueCounter(obj2, 88) // => 0

// pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
// valueCounter(pairs, 'Roman') // => 2
***********************************************************************/

function valueCounter (obj, val) {
    let counter = 0

    for( let key in obj) {
        let value = obj[key]

        if(value === val) {
            counter += 1
        }
    }

    return counter
}