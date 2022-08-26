//given an integer "length" write a function 


function fibinocci (length) {
    if (length === 0) {
        return []
    } else if (length === 1){
        return [1]
    }

    let arr = [1,1]

    while (arr.length < length) {
        let nextEle = arr[arr.length -1] + arr[arr.length -2]
        arr.push(nextEle)
    }
    return arr
}

// console.log(fibinocci(6))

// math functions

// Math.floor : Rounds numbers downwards
// console.log(Math.floor(3.8));
// // Math.ceil : rounds numbers upwards
// console.log(Math.ceil(3.2));
// // Math.round : Rounds numbers normally
// console.log(Math.round(3.7));
// // Math.sqrt : Squart root of a number
// console.log(Math.sqrt(25));
// // Math.pow : Two arguments, first agrument is the base number, second argument is what youre setting the power to
// console.log(Math.pow(2, 4));
// // Math.sign : Returns -1 or 1 depending on if the number is negative or positive respectively
// console.log(Math.sign(10));
// // Math.abs : Returns the absolute value of a number
// console.log(Math.abs(-20));
// // Math.PI : Returns pi
// console.log(Math.PI);

//call back

function higherOrder (cb) {
    cb()
}

function sayHello() {
    console.log("hello")
}

function sayGoodbye() {
    console.log('goodbye')
}

// higherOrder(sayHello)
// higherOrder(sayGoodbye)

function addAndCall (num1, num2, cb) {
    var sum = num1 + num2
    return cb(sum)
}

function yellAnswer(answer) {
    console.log(answer + " IS THE ANSWER!")
}

function double (num) {
    return num * 2
}

// addAndCall(40, 2, yellAnswer)
// addAndCall(1, 1, console.log)
// console.log(addAndCall(10, 2, double))
// console.log(addAndCall(30, 6, Math.sqrt))

// higher order function and helper functions

//Difference between Higher Order Functions (HOF) vs. Helper functions:
//Callbacks are part of the HOF's functionality, they can change based on what functions are inputted

//Helper functions aren't necessary, they aid a function's logic and will always be the same regardless 
//of the call

////////////////////////////////////////////////////////////////////////////////
//Callback methods (Built-in methods for array)
////////////////////////////////////////////////////////////////////////////////

//First argument => element
//Second argument => index
//Third argument => entire array


let nums = [0,1,2,3,4,5,6,7,8,9,10];

//<array>.forEach() - Similar to for loop, iterate over the array

// nums.forEach((element, index, array) => {
//     console.log( index + ' : ' + element);           
// });

//<array>.map() - Returns a new array where each element of the array is modified by an anonymous call back function

let doubledArray = nums.map((ele) => {
    return ele * 2;
})
// console.log(doubledArray);
// console.log(nums);


//<array>.filter() - Returns a new array of elements that returned true when passed into an anonymous call back function

let names = ['Jesse', 'Kevin', 'Steven', 'George', 'Eli'];
let newArr = names.filter((ele) => { 
    if(ele.length > 5) {
        return true;
    }

    return false;
})

// console.log(newArr);

// let nums = [0,1,2,3,4,5,6,7,8,9,10];

let evenArray = nums.filter((ele) => {
    if(ele % 2 === 0) {
        return true;
    }
    return false;
})
// console.log(evenArray);
// console.log(nums);

//<array>.every() - Returns the boolean 'true' if all element within the array returns true when passed into an anonymous call back function
//Returns false if any element within the array returns false


let notNegative = nums.every((ele) => {
    if(ele > 3) {
        return true;
    }
    return false;
})
// console.log(notNegative);

//<array>.some() - Returns the boolean 'true' if any element within the array returns true when passed into an anonymous call back function
//Returns false if all elements withtin the array returns false

let nums2 = [5,20,100];
let containsNegative = nums2.some((ele) => {
    if(ele > 10) {
        return true;
    }
    return false;
})
// console.log(containsNegative);





function fib(n, memo = {}) {
    if (n === 1 || n === 2) {
        return 1
    } 

    if (n in memo) return memo[n]

    memo[n] = fib(n-1,memo) + fib(n -2, memo)

    return memo[n]
}

console.log(fib(90))

////////////////////////////////////////////////////////////////////////////////
// W3D4 - Data Modeling
////////////////////////////////////////////////////////////////////////////////

// What is data modeling?
// Data modeling is the art of choosing the appropiate `data structure`
// to use for our applications

// Depending on which data structure we choose, it can affect the complexity
// of our program

// Data Structures
// A data structure is a container to store and organize data

// A data structure is a way to organize the data in a manner such
// that we can process the data efficiently

// Built in data structures in JavaScript:
//  1. Arrays     [] // [ ele1, ele2, ele3 ]
//  2. Objects    {} // { 'key1': val1, 'key2': val2 }

// Each data structure is good for specific use cases
//  1. Arrays
//      - Used to collect a group of related items
//      - Each item in an array are sequential - physically next to each
//        other in memory; offers caching - more efficient access
//  2. Objects
//      - Used to model a single entity
//      - Each key-value pair can be located anywhere in memory - unordered
//      - Extremely fast look up
//      - Want to keep track of multiple things at once (see example below)
//      - Commonly used to get rid of nested loops
//            - if we want fast look up
//            - however it comes with the cost of using more space in memory

// Choose the appropiate data structure to model the following item(s):
// 1. Student                 // => { "name": "Wayne", "id": 2, "grades": [100, 88, 92] }
// 2. Class of students       // => { "paul": {...}, "jacky": {..} }
// => [ {..}, {...}, {...} ]
// 3. Car                     // => { "model": "mercedes", "year": 2019, "mileage": 5 }
// 4. Parking lot             // => [ car1, car2, car3 ], where each `car` is an object

// Data Model Examples

// ~~~~~~ 1

// 1. Grocery list of items: lettuce, tomato, berries
const grocery1 = ['lettuce', 'tomato', 'berries'];

// 2. Grocery list of items: 1 lettuce, 2 tomatoes, 3 berries;
const grocery2 = { lettuce: 1, tomatoes: 2, berries: 3 };

// 3. What if i want to keep track of the price for each item?
const grocery3 = ['lettuce', 'tomatoes', 'berries'];
const lettuce = { quantity: 1, price: 2 };
const tomato = { quantity: 1, price: 3 };

// item: [price, quantity]
const grocery4 = { lettuce: [1, 2], tomatoes: [2, 4], berries: [3, 0.25] };

// find the cost
const cost4 = grocery4['lettuce'][0] * grocery4['lettuce'][1];

// what if we store the as keys with the values consisting of a object with quantity and price
const grocery5 = {
  lettuce: { quantity: 1, price: 2 },
  tomatoes: { quantity: 2, price: 4 },
  berries: { quantity: 3, price: 0.25 },
};
const cost5 = grocery5['lettuce']['price'] * grocery5['lettuce'].quantity;

// we can even do better by storing everything in an array, each item being an object with name, price and quantity properties
const grocery6 = [
  { name: 'tomato', price: 2, quantity: 10 },
  { name: 'lettuce', price: 4, quantity: 20 },
  { name: 'berries', price: 5, quantity: 30 },
];

// ~~~~~~ 2
const students1 = [
  { name: 'Anthony' },
  { name: 'Winnie' },
  { name: 'Pikachu' },
];

// Write a function that will print the name of all the students
// Example:
//
// printNames(students1)
// Anthony
// Winnie
// Pikachu

function printNames(students) {
  for (let i = 0; i < students.length; i++) {
    const studentObj = students[i]; // { name: "Anthony" }
    const name = studentObj.name;

    console.log(name);
  }
}

// printNames(students1);

////////////////////////////////////////////////////////////////////////////////
// Data Modeling Practice - Part 1
////////////////////////////////////////////////////////////////////////////////
const students3 = [
  {
    name: 'Anthony',
    id: 0,
    grades: [
      { id: 0, score: 84 },
      { id: 1, score: 20 },
      { id: 2, score: 80 },
    ],
  },
  {
    name: 'Winnie',
    id: 1,
    grades: [
      { id: 0, score: 62 },
      { id: 1, score: 56 },
      { id: 2, score: 100 },
    ],
  },
  {
    name: 'Pikachu',
    id: 2,
    grades: [
      { id: 0, score: 79 },
      { id: 1, score: 92 },
      { id: 2, score: 49 },
    ],
  },
];

// Write a function that will print the name of the student and their highest test score
// Example:
//
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pikachu 92

// write a helper function to get the highest score for 1 student
function highestScore(grades) {
  let highest = grades[0].score; // {id: 0, score: 79}.score => 79

  for (let i = 1; i < grades.length; i++) {
    const gradeObj = grades[i]; // {id: 1, score: 92}
    const score = gradeObj.score; // 92

    if (score > highest) {
      highest = score;
    }
  }

  return highest;
}

// const grades =  [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}];
// console.log(highestScore(grades));      // => 92

function printBestGrade(students) {
  for (let i = 0; i < students.length; i++) {
    const studentObj = students[i]; // {id: 1, name: pikachu, grades: [..]}
    const name = studentObj.name; // "pikachu"
    const grades = studentObj.grades; // [{..},{..},{..}]
    const highest = highestScore(grades); // 92

    console.log(name, highest);
  }
}

// printBestGrade(students3);

// Write a function that will print the name of the student and their average test score
//
// Example
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winnie 72.66666666666667
// Pikachu 73.33333333333333

// write a helper function that computes the avg grade per student
function average(grades) {
  let sum = 0;

  for (let i = 0; i < grades.length; i++) {
    const gradeObj = grades[i]; // {id: 0, score: 79}
    const score = gradeObj.score; // 79

    sum += score;
  }

  return sum / grades.length;
}

const grades = [
  { id: 0, score: 79 },
  { id: 1, score: 92 },
  { id: 2, score: 49 },
];
// console.log(average(grades));

// {
//   name : "Pikachu",
//   id : 2,
//   grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
// }

function printAverageGrade(students) {
  for (let i = 0; i < students.length; i++) {
    const studentObj = students[i];
    const name = studentObj.name;
    const grades = studentObj.grades;
    const avg = average(grades);

    console.log(name, avg);
  }
}

// printAverageGrade(students3);

////////////////////////////////////////////////////////////////////////////////
// Data Modeling Practice - Part 2
////////////////////////////////////////////////////////////////////////////////

/*
For this exercise, you will create complex objects that are meant to be
parsed by specified functions.
*/

//~~~~~~1
// Create the data object that this function is expecting
//
// Example
//
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users

const users1 = [
  { id: 0, username: 'UserName1' },
  { id: 1, username: 'UserName2' },
  { id: 2, username: 'UserName3' },
];

function printUsers(users) {
  for (let i = 0; i < users.length; i++) {
    // users.length -> array
    let user = users[i];
    console.log(user.id + ': ' + user.username);
  }
}

// printUsers(users1);

//~~~~~~2
// Create the data object that this function is expecting
//
// Example
//
// printUsersWebsites(users2)
// ~~UserName1~~
//   -siteName1
//   -siteName2
// ~~UserName2~~
//   -siteName3
//   -siteName4
//   -siteName5
// ...and so forth, for all the users

const users2 = [
  {
    username: 'UserName1',
    sites: [{ url: 'siteName1' }, { url: 'siteName2' }],
  },
  {
    username: 'UserName2',
    sites: [{ url: 'siteName3' }, { url: 'siteName4' }, { url: 'siteName5' }],
  },
];

function printUsersWebsites(users) {
  for (let i = 0; i < users.length; i++) {
    // outmost container is an array
    let user = users[i];
    console.log('~~' + user.username + '~~'); // user.username, user["username"]

    for (let j = 0; j < user.sites.length; j++) {
      let site = user.sites[j];
      console.log('  -' + site.url);
    }
  }
}

// printUsersWebsites(users2);

//~~~~~~3
// Create the data object that this function is expecting
//
// Example
//
// printUsersWebsitesInfo(users3)
// ~~UserName1~~
//   -siteName1.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName2.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ~~UserName2~~
//   -siteName3.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName4.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName5.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ...and so forth, for all the users

// const users3 = your code here;

function printUsersWebsitesInfo(users) {
  for (let i = 0; i < users.length; i += 1) {
    let user = users[i];
    console.log('~~' + user.username + '~~');

    for (let j = 0; j < user.sites.length; j += 1) {
      let site = user.sites[j];
      console.log('  -' + site.url);
      console.log('    -load:' + site.load);
      console.log('    -# of users:' + site.userCount);
      console.log('    -popularity score:' + site.pop);
    }
  }
}

// printUsersWebsitesInfo(users3); //uncomment when ready to test

//.


function anagram (word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }

  let wordCount = {}

  for (let i = 0; i < word1.length; i++) {
    let char1 = word1[i]
    let char2 = word2[i]

    if (char1 in wordCount) {
      wordCount[char1] ++
    } else {
      wordCount[char1] = 1
    }

    if (char2 in wordCount) {
      wordCount[char2]--
    } else {
      wordCount[char2] = -1
    }
  }
    for (let c in wordCount) {
      if (wordCount[c] !== 0) {
      return false
    }
  } 
  return true
}


function multiply (num1, num2) {
  if (num1 === 0) return 0

  return num2 + multiply(num1 - 1, num2)
}

console.log(multiply(3,5))

let arr = [1,2,3,4,5,6,7,8]
console.log(arr.map(ele => ele * 2))
 
console.log(arr.map((ele,idx) => {
  if (idx % 2 ===0) {
    return ele * 2
  } else {
    return ele * -2
  }
}))
