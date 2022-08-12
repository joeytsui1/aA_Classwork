/***********************************************************************
Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
function should return true if the arrays have different lengths. The
function should return false otherwise.

Examples:

var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

diffArrayLen(a1, a2); // => false
diffArrayLen(a1, a3); // => true
***********************************************************************/
var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

function diffArrayLen (arr1, arr2) {
    return arr1.length != arr2.length
}

console.log(diffArrayLen(a1, a3))

/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray ( array ) {
    let arr = [] 

    for ( i = 0; i < array.length; i ++ ) {
        arr.push(i)
    }
 
    for ( i = array.length - 1; i >= 0; i-- ) {
        arr.push(i)
    }
    return arr
}

console.log(mirrorArray([1,2,3]))

/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

function avgValue (array) {
    let sum = 0 

    for ( i = 0; i < array.length; i++ ) {
        let num = array[i]
        sum += num
    }
    let avg = sum / array.length
    return avg
}

console.log(avgValue([10, 20]))

/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
function removeVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var newWord = '';
  
    for (var i = 0; i < word.length; i += 1) {
      var char = word[i];
      if (vowels.indexOf(char) === -1) {
        newWord += char;
      }
    }
    return newWord;
  }
  
  function abbreviate(sentence) {
    var words = sentence.split(' ');
    var newWords = [];
  
    for (var i = 0; i < words.length; i += 1) {
      var word = words[i];
  
      if (word.length >= 5) {
        newWords.push(removeVowels(word));
      } else {
        newWords.push(word);
      }
    }
  
    var newSen = newWords.join(' ');
    return newSen;
  }

// function removeVowels(word) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var newWord = '';
  
//     for (var i = 0; i < word.length; i += 1) {
//       var char = word[i];
//       if (vowels.indexOf(char) === -1) {
//         newWord += char;
//       }
//     }
  
//     return newWord;
//   }
  
//   function abbreviate(sentence) {
//     var words = sentence.split(' ');
//     var newWords = [];
  
//     for (var i = 0; i < words.length; i += 1) {
//       var word = words[i];
  
//       if (word.length >= 5) {
//         newWords.push(removeVowels(word));
//       } else {
//         newWords.push(word);
//       }
//     }
  
//     var newSen = newWords.join(' ');
//     return newSen;
//   }


console.log(abbreviate('bootcamp prep is fun'))

/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap (sentence) {
    let words = sentence.split(' ')
    let arr = []
    
    for (i = 0; i < words.length; i++ ) {
        let word = words[i].toLowerCase()
        let firstChar = word[0].toUpperCase()
        let lastChar = word[word.length -1].toUpperCase()
        let midChar = word.slice(1, -1)

        let newWord = firstChar + midChar + lastChar
        arr.push(newWord)
    }
    return arr.join(' ')
}

console.log(firstLastCap('hello BOOTCAMP PrEp'))

/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/
var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);

function catBuilder (name, color, toys) {
    let obj = {
        name: name,
        color: color,
        toys: toys
    }

    return obj
}

console.log(cat2)

/***********************************************************************
Write a function `printObject(obj)` that prints out all key-value pairs
of an object. HINT: use a for loop.

Example:

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp); // prints

`name - App Academy`
`color - Red`
`population - 120`
***********************************************************************/
var bootcamp = {
    name: 'App Academy',
    color: 'Red',
    population: 120,
   };

function printObject (obj) {
    for (let key in obj) {
        console.log( key + ' - ' + obj[key] )
    }
}

printObject(bootcamp)

/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.

Examples:

var p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'

var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/
var p1 = {firstName: 'John', lastName: 'Doe'};


function getFullName (person) {
    return person.firstName + ' ' + person.lastName
}

console.log(getFullName(p1))

/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/
var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

function valuePair (obj1, obj2, key) {
    let arr = []

    arr.push(obj1[key])
    arr.push(obj2[key])

    return arr
}

console.log(valuePair(object1, object2, 'location'))

/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/
var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}

function doesKeyExist (obj, key) {
    if (obj[key] === undefined) {
        return false
    } else {
        return true
    }
}

console.log(doesKeyExist(obj1, 'course'))
console.log(doesKeyExist(obj1, 'name'))

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

function adults (people) {
    let arr = [] 

    for ( i = 0; i < people.length; i ++ ) {
        let person = people[i] 
            
        if (person.age >= 18) {
            arr.push(person.name)
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

function hasFavoriteFood (obj, food) {
    return obj.favoriteFoods.includes(food)
}

/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2

var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/
var peeps = [
    {name: "Anthony", score: 2},
    {name: "Winnie", score: 2},
    {name: "Fred", score: 2},
    {name: "Winnie", score: 2},
    {name: "Fred", score: 2},
    {name: "Anthony", score: 2},
    {name: "Winnie", score: 2}
  ];

function countScores (people) {
    let obj = {}

    for ( i = 0; i < people.length; i++ ) {
        let person = people[i] 
        let name = person.name
        let score = person.score

        if(obj[name] === undefined) {
            obj[name] = score
        } else {
            obj[name] += score
        }
    }
    return obj
}

console.log(countScores(peeps))

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

    for (i = 0; i < array.length; i++ ) {

        if( i === 0 && array[i] > array[i + 1]) {
            arr.push(i)
        } else if ( i === array.length - 1 && array[i] > array[i - 1]) {
            arr.push(i)
        } else if ((array[i] > array[i + 1]) && (array[i] > array[i - 1])) {
            arr.push(i)
        }
    }
    return arr
}

console.log(peakFinder([1, 2, 3, 2, 1]))
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]))

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

function divisibleByThreePairSum (array) {
    let arr = [] 
        for ( i = 0; i < array.length; i ++) {
            for ( j = i + 1; j < array.length; j++ ) {
                if ((array[i] + array[j]) % 3 === 0) {
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
var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

function zipArray (arr1, arr2) {
    let arr = []

    for (i = 0; i < arr1.length; i++ ) {
        arr.push([arr1[i], arr2[i]])
    }
    return arr
}

console.log(zipArray(a1, a2))

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

    for (i = 0; i < array.length; i ++ ) {
        for ( j = 0; j < array[i].length; j++ ) {
            sum += array[i][j]
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

var arr2 = [
  ['a','b','c','d'],
  ['a','b'],
  ['a','c','d','a']
]

function countInnerElement (arr) {
    let obj = {}

    for ( i = 0; i < arr.length; i ++ ) {
        for ( j = 0; j < arr[i].length; j++ ) {
            let ele = arr[i][j]

            if ( obj[ele] === undefined) {
                obj[ele] = 1
            } else {
                obj[ele] += 1
            }
        }
    }
    return obj
 }

 console.log(countInnerElement(arr2))

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

    for ( i = 0; i < array.length; i++ ) {
        for ( j = i + 1; j < array.length; j++ ) {
            if ((array[i] - array[j] === 2) || (array[i] - array[j] === -2)) {
                arr.push([i,j])
            }
        }
    }
    return arr
}

console.log(twoDiff([2, 3, 4, 6, 1, 7]))

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

let array1 = [1,23,2,43,3,4]
let array2 = [3, 23]

function arrayDiff (arr1, arr2) {
    let arr = [] 

    for (i = 0; i < arr1.length; i++ ) {
        let ele = arr1[i] 

        if (!arr2.includes(ele)) {
            arr.push(ele)
        }
    }
    return arr
}

console.log(arrayDiff(array1, array2))

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
obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}

function valueCounter (obj, val) {
    let counter = 0
    for (let key in obj) {
        let value = obj[key]

        if (value === val) {
            counter += 1
        }
    }
    return counter
}

console.log(valueCounter(obj1, 'Anne'))

/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels (string) {
    let letter = string.split("")
    let vowels = "aeiouAEIOU".split("")
    let newSen = []

    for ( i = 0; i < letter.length; i ++ ) {
        let letterValue = letter[i].toLowerCase()

        if ( vowels.includes(letterValue)) {
            newSen.push(letterValue.toUpperCase())
        } else {
            newSen.push(letterValue)
        }
    }
    return newSen.join('')
}

console.log(capVowels('HELLO WORLD'))

/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/

function isPrime (n) {
    if (n < 2) {
        return false
    }

    for (i = 2; i < n; i++ ) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

function nextTwoPrimes (num) {
    let arr = []

    for ( let i = num + 1; arr.length < 2; i++ ) {
        if ( isPrime(i) ) {
            arr.push(i)
        }
    }
    return arr
}

console.log(nextTwoPrimes(2))

 /***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

function pairProduct (arr, num) {
    let array = []
    let i = 0

    while (i < arr.length) {
        let j = i + 1

        while (j < arr.length) {
            if ((arr[i] * arr[j] === num)) {
                array.push([i,j])
            }
            j++
        }
        i++
    }
    return array
}

console.log(pairProduct([1,2,3,4,5], 4))

/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.

Examples:

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

twoDimensionalSize(arr1); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

twoDimensionalSize(arr2); // => 5
***********************************************************************/
var arr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];

function twoDimensionalSize (array) {
    let counter = 0

    for (i = 0; i < array.length; i++ ) {
        for (j = 0; j < array[i].length; j++ ) {
            counter += 1
        }
    }
    return counter 
}

console.log(twoDimensionalSize(arr1))

/***********************************************************************
Write a function elementCount(array) that returns a object. Each key
corresponds to an element in the array and the value corresponds to how
many times that element appears in the array.

Example:
elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
***********************************************************************/

function elementCount (array) {
    let obj = {}

    for ( i = 0; i < array.length; i++ ) {
        let ele = array[i]

        if(obj[ele] === undefined) {
            obj[ele] = 1
        } else {
            obj[ele] += 1
        }
    }
    return obj
}

console.log(elementCount(["a", "a", "b", "b"]))

/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/

function removePunctuation(word) {
    var punctuation = [";", "!", ".", "?", ",", "-"]
    let lastChar = word[word.length-1]

    if (punctuation.indexOf(lastChar) !== -1) {
        return word.slice(0,-1)
    } else {
        return word
    }
}


function isStopWord(word, stopWords) {
    var noPuncWord = removePunctuation(word);
  
    return stopWords.indexOf(noPuncWord) !== -1;
  }


function titleize (title, stopWords) {
    let splitTitle = title.split(' ')
    let arr = []

    for ( i = 0; i < splitTitle.length; i++ ) {
        let value = splitTitle[i].toLowerCase()

        if(isStopWord(value, stopWords)){
            arr.push(value)
        } else {
            value = value[0].toUpperCase() + value.slice(1)
            arr.push(value)
        }
    }
    return arr.join(' ')
}

console.log(titleize("shall we dance?", ["dance"]))

