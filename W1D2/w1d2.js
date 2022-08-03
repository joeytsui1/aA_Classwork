// function average(num1, num2) {
//     let sum = num1 + num2;
//     let average = sum / 2;

//     return average;
// }

// let average1 = function(num1, num2) {
//     let sum = num1 + num2;
//     let average = sum / 2;

//     return average;
// }

// let average2 = (num1, num2) => {
//     let sum = num1 + num2;
//     let average = sum / 2;

//     average === 1.5 ? console.log(1.5) : console.log('not 1.5')
//     average !== 1.5 && console.log('testing the other if statement')
//     return average
// }

// console.log(average2(1,3))

// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

function isOdd(num) {
    if(num % 2 === 0 ){
        return false
    } else if(num % 2 !==0 ){
        return true
    }
}

console.log(isOdd(2))
console.log(isOdd(5))
console.log(isOdd(-17))

function isOdd(num) {
    return num % 2 !== 0
}

// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
    return num = num + 5
  }

  console.log(plusFive(10))
  console.log(plusFive(7))
  console.log(plusFive(-8))

  // Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
function threeOrSeven(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true
    } 
        return false
}

console.log(threeOrSeven(3))
console.log(threeOrSeven(42))
console.log(threeOrSeven(8))

// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
function hello(str) {
    console.log('Hello, '+ str)
}
hello("child")
hello("Anthony")


// function hello(str) {
//     return "Hello, " + str
//   }

// console.log(hello("child"))

// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
function yell(string) {
    let stringEx = string.toUpperCase() + "! ! !"
    return stringEx
  }
  console.log(yell("I want to go to the store"))
  console.log(yell("Time to program"))

  // Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."
function whisper(string) {
    let stringEx = "..." + string.toLowerCase() + "..."
    return stringEx
  }

  console.log(whisper("Hey Anthony"))
  console.log(whisper("YEA! that was fun"))

  // Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
function isSubstring(searchString, subString) {
    let lowerSearchStr = searchString.toLowerCase()
    let lowerSubStr = subString.toLowerCase()

    return lowerSearchStr.indexOf(lowerSubStr) !==1
    
  }
  console.log(isSubstring("The cat went to the store", "he cat went"))

  // Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
function echo(string) {
     let stringEx = string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase()
     return stringEx
  }

  console.log(echo("Mom!"))
  console.log(echo("hey"))
  console.log(echo("JUMp"))

// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false
function isEven(num) {
    if(num % 2 === 0){
        return true
    }  else {
        return !isOdd(num)
    }
  }

  console.log(isEven(2))
  console.log(isEven(5))

  // Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.
//
// Examples:
//
// averageOfFour(10, 10, 15, 5); // => 10
// averageOfFour(3, 10, 11, 4); // => 7
// averageOfFour(1, 2, 3, 4); // => 2.5

function averageOfFour(num1, num2, num3, num4){
    return (num1 + num2 + num3 + num4)/4
}

console.log(averageOfFour(10,10,15,51))
console.log(averageOfFour(3,10,11,4))
console.log(averageOfFour(1,2,3,4))