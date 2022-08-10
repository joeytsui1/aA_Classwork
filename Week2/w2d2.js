////////////////////////////////////////////////////////////////////////////////
// W2D2 - Controlling Complexity - Function Decomposition - Objects
////////////////////////////////////////////////////////////////////////////////

// Objectives
// - What is function decomposition
// - Learn why function decomposition is important
// - How to decompose our functions
// - What are objects
// - Common object methods (look up, search, create new key-value pairs)
// - Looping through object

// What is good code?
//  - readability
//  - scalability (won't have to worry about in Bootcamp Prep)

// We don't have to worry about optimizing our code in Bootcamp Prep
// Only focus on getting a working piece of code
// And also making it more readable :)

// Decomposition - process of breaking down a larger complex problem
// into smaller, more manageable sub problems

// Why do we use decomposition or helper functions?
//  - To make our code more readable!
//  - Easier to manage
//  - Easier to test and debug
//  - Staying DRY - Do not Repeat Yourself Principle!
//  - repetitive logic are more prone to errors: syntax or typos

// example:
// Write a function `laligatSum(n)` that takes in a number
// and returns the laligatSum of that number.
// A number's laligat sum is the sum of all the prime numbers less than
// or equal to that number

// console.log(laligatSum(10));           // => 2 + 3 + 5 + 7 = 17
// console.log(laligatSum(11));           // => 2 + 3 + 5 + 7 + 11 = 28

// init a sum variable that will collect the sum of all the primes below the number for me
// create the isPrime function
// loop through all the numbers less than or equal to the number that is being passed into the function

function laligatSum(num) {
    let sum = 0;
  
    for (let n = 2; n <= num; n++) {
      if (isPrime(n)) {
        sum += n;
      }
    }
  
    return sum;
  }
  
  function isPrime(num) {
    if (num < 2) return false;
  
    for (let n = 2; n < num; n++) {
      if (num % n === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // console.log(laligatSum(10));           // => 2 + 3 + 5 + 7 = 17
  // console.log(laligatSum(11));           // => 28
  
  
  // There is no hard rule to decide on when and how to decompose a large problem
  // into multiple helper functions.
  // Do what makes sense in the context of the problem.
  
  // How to tell you might need a helper function?
  // (a) If your function is getting too long and complicated, esp. having a nested loop,
  //     It might be advantageous to break it down using helper functions to keep
  //     your code clean and organized
  // (b) If you catch yourself writing repetitive code
  
  // https://github.com/appacademy/bootcamp-prep-live-curriculum/blob/update-w2d2-helper-functions/week_2/d2/notes/helper_functions_101.md
  
  ////////////////////////////////////////////////////////////////////////////////
  // W2D2 - Objects
  ////////////////////////////////////////////////////////////////////////////////
  
  // Data Structures - containers to store / organizes data
  //    - Array   []      a collection of related items
  //    - Object  {}      model a single entity - ie: real life object
  
  // objects are another JavaScript data structure we can use to store data
  // objects are non-primitive data type
  // objects are mutable
  // objects have "key-value pairs"
  // keys in JavaScript are always STRINGS!!
  // values in JavaScript can be of ANY data type
  // keys are UNIQUE vs. values are not unique
  // objects are unordered vs. arrays are ordered (arrays are ordered by indices)
  
  ////////////////////////////////////////////////////////////////////////////////
  // How to create an object
  ////////////////////////////////////////////////////////////////////////////////
  
  // Two ways to create an object
  
  // Method 1:
  // Let's create our very first cat object :)
  let cat = { 
    name: 'whiskers', 
    age: 2, 
    color: 'orange'
  };
  
  let cats = ['whiskers', 'garfield', 'bobo'];
  
  // keys: name, age, color
  // values: whiskers, 2, orange
  
  // console.log(cat);
  
  // Method 2:
  // Let's create a dog object
  let dog = {};
  
  // add key-value pairs using square bracket notation
  dog["name"] = 'fido';
  dog['age'] = 4;
  dog['color'] = 'brown';
  
  // adding key-value pairs using dot notation
  // dog.name = "fido";
  // dog.age = 4;
  // dog.color = "brown";
  
  // console.log(dog);
  
  ////////////////////////////////////////////////////////////////////////////////
  // Object methods - Dot Notation vs. Bracket Notation (Keying into an object)
  ////////////////////////////////////////////////////////////////////////////////
  
  let pokemon = {
    id: 25,
    name: 'pikachu',
    color: 'yellow',
    type: 'electric',
    weight: '50 lbs',
    attacks: ['thunderbolt', 'agility', 'tail whip', 'growl'],
    'test-attr': true
  }
  
  // Keying into an object to get its corresponding value
  // 1. Using square bracket notation
  // console.log(pokemon['name']); // "pikachu"
  // console.log(pokemon['color']); // "yellow"
  // console.log(pokemon['attacks']); // ['thunderbolt', 'agility', 'tail whip', 'growl']
  
  // 2. Using dot notation
  // console.log(pokemon.name); // "pikachu"
  // console.log(pokemon.color); // "yellow"
  // console.log(pokemon.attacks); // ['thunderbolt', 'agility', 'tail whip', 'growl']
  
  // When a key-value pair does not exist in object
  // console.log(pokemon['height']); // undefined
  // console.log(pokemon.height); // undefined
  
  // Similar to:
  let arr = [10, 11, 12];
  arr[10]; // undefined
  
  
  // Square bracket vs. Dot notation
  // 1. Using variables
  let potato = 'color';
  
  console.log(pokemon.potato); // undefined; looks for the literal key of "potato"
  console.log(pokemon[potato])
  console.log(pokemon.color)
  
  // pokemon[potato] is EQUIVALENT to pokemon["color"]
  // pokemon.potato is EQUIVALENT to pokemon["potato"]
  
  // 2. Keys that are not valid variable names
  // console.log(pokemon['test-attr']); // true
  // console.log(pokemon.test-attr);             // throws an error
  
  // Keys in JavaScript objects are strings and unique
  // Keys that are NOT valid JavaScript variable names can NOT be accessed with dot notation (ie: test-attr)
  // Keys represented by variables can be used with square bracket notation and NOT dot notation
  // Dot notation always looks for the literal key
  
  ////////////////////////////////////////////////////////////////////////////////
  // Looping through an object
  ////////////////////////////////////////////////////////////////////////////////
  
  // Write a function `printObj` that takes in an object and simply prints
  // out each key-value pair of the object
  
  let jigglypuff = {
    name: 'jigglypuff',
    id: 39,
    gender: 'female',
    color: 'pink',
    weight: '10 lbs',
    favoriteFoods: 'tacos',
  };
  
  function printObj(obj) {
    for (let key in obj) {
      let val = obj[key];
  
      console.log(key + ' : ' + val);
    }
  }
  
  // printObj(jigglypuff);
  
  ////////////////////////////////////////////////////////////////////////////////
  // Example
  ////////////////////////////////////////////////////////////////////////////////
  
  // Write a function `elementCount` that takes in a word and returns an
  // object where the keys represent each unique character in the word,
  // and the value corresponds to the number of times each character appears
  // in the string
  
  // console.log(elementCount(''));         // => {}
  // console.log(elementCount('pizza'));    // => {p: 1, i: 1, z: 2, a: 1}
  
  function elementCount(word) {
    let obj = {};
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (obj[char] === undefined) {
        obj[char] = 1;
      } else {
        obj[char] += 1;
      }
    }
  
    return obj;
  }
  
  console.log(elementCount(''));         // => {}
  console.log(elementCount('pizza'));    // => {p: 1, i: 1, z: 2, a: 1}
  
  // check if key exists in obj
  // if (obj[key] !== undefined)
  // if a key doesnt exist in obj
  // obj[key] => undefined
  
  ///////////////////////////////////////////////////////////////////////////////
  // Objects vs. Arrays
  ////////////////////////////////////////////////////////////////////////////////
  
  // arrays are commonly used to group similar data together
  // arrays are ordered by their indices
  let nums = [1, 2, 3];
  let colors = ['red', 'violet', 'blue'];
  
  // objects are used to model a single entity - describe a single item
  // objects are unordered
  let articuno = { name: 'articuno', id: 144, color: 'ice blue' };
  
  let bootcamp = {
    name: 'App Academy',
    color: 'red',
    year: 2012,
    size: 1000,
    teachers: ['Alvin', 'JJ', 'Anne', 'Roman', 'Brendan'],
  };
  
  // bootcamp['color'] => 'red';
  // bootcamp['location'] => undefined
  
  ////////////////////////////////////////////////////////////////////////////////
  // Bonus - Methods vs. Functions
  ////////////////////////////////////////////////////////////////////////////////
  
  // methods are functions that belongs to an object
  // every method is a function,
  // but not every function is a method
  
  let fido = {
    name: 'Fido',
    age: 4,
    bark: function (name) {
      console.log('hello ' + name);
    },
    purr: function () {
      console.log("dogs don't purr >.<");
    },
  };
  
  // fido.bark('steve');                 // 'woof woof'
  // fido.purr();                       // "dogs don't purr >.<"
  
  ////////////////////////////////////////////////////////////////////////////////
  // Objects Quiz
  ////////////////////////////////////////////////////////////////////////////////
  
  // 1. An object contains...
  //  (a) key-value pairs*
  //  (b) elements
  //  (c) numbers
  
  // 2. If a key is not inside an object, what value do we get when accessing that key?
  //  (a) 0
  //  (b) undefined
  //  (c) false
  
  // 3. We can use variables as keys in an object by using...
  //  (a) bracket notation []
  //  (b) dot notation .
  //  (c) both bracket and dot notation
  
  // 4. Keys in an object can be what data type?
  //  (a) strings
  //  (b) numbers
  
  // 5. Values in an object can be what data type?
  //  (a) strings
  //  (b) numbers
  //  (c) booleans
  //  (d) arrays
  //  (e) any data type
  
  //.