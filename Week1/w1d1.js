// console.log('hi everyone');
// console.log(10 + 3);                         // 13
// console.log(10 * 3);                         // 30
// console.log(10 - 3);                         // 7
// console.log(10 / 3);                         // 3.3333

// console.log(10 % 3);                         // 1
// console.log(10 % 2);                         // 0; evenly divisible
// console.log(2 % 5);                          // 2
// // Operators:
// // Or (||)
// console.log(true || true);                   // true
// console.log(true || false);                  // true
// console.log(false || true);                  // true
// console.log(false || false);                 // false


// // And (&&)
// console.log(true && true);                   // true
// console.log(true && false);                  // false
// console.log(false && true);                  // false   
// console.log(false && false);                 // false


// // Bang (!) - negate
// console.log(!true);                          // false
// console.log(!false);                         // true
// console.log(!!true);                         // true

// console.log(10 > 10);                        // false
// console.log(10 >= 10);                       // true
// console.log(10 < 11);                        // true
// console.log(10 <= 10);                       // true
// console.log(10 === 10);                      // true
// console.log(10 !== 11);                      // true
// console.log(0 === -0);                       // true
// console.log(false !== true);                 // true

// console.log(10 == '10');                     // true
// console.log(10 === '10');                    // false; different data types

// console.log(20 - 5 > 12);                    // true
// console.log(true || false && false);         // true

// console.log("hello"[0]);                     // "h"
// console.log("hello"[1]);                     // "e"
// console.log("hello"[2]);                     // "l"
// console.log("hello"[6]);                     // undefined; default value when no value present
// console.log("hi bye"[2]);                    // " "

// console.log("hello".length);                 // 5
// console.log("".length);                      // 0
// console.log("hello"["hello".length - 1]);    // "o"; grab last character in string

// console.log("hello".indexOf('e'));           // 1
// console.log("hello".indexOf("l"));           // 2; returns the left-most char for duplicates
// console.log("hello".indexOf('llo'));         // 2; returns index where substring starts
// console.log("hello".indexOf('x'));           // -1; returns -1 if char is not present

// console.log("race".concat("car"));           // "racecar"
// console.log("race" + "car");                 // "racecar"
// console.log("hello" + " " + "world");        // "hello world"

// console.log(4 + "hi");                       // "4hi"
// console.log(4 * "hi");                       // NaN; not a number
// console.log(4 * "10");                       // 40

// console.log("hello".toUpperCase());          // "HELLO"
// // console.log("HI".toLowerCase());             // "hi"
// // console.log("hello".slice());                // "hello"
// // console.log("hello".slice(1));               // "ello"
// // console.log("hello".slice(1, 3));            // "el" (start index(inclusive), end index(exclusive))

// // let hello = "world";

// // let str = "bootcamp prep";
// // const food = "pizza";

// // console.log(str);

// // str = "something else";
// // console.log(food);
// // console.log(str === "something else");

let num = 3;

// // if (num > 2){
// //     console.log("num is greater than 2");
// // } else if (num === 2) {
// //     console.log("num is equal to 2");
// // } else {
// //     console.log('we hit the catch all');
// // }

// if (num > 2) {
//   console.log("num is greater than 2");
// } else if (num > 0) {
//   console.log("num is positive");
// } else if (num < 0) {
//   console.log("num is negative");
// } else {
//   console.log("else num is less than 2, is not positive, nor negative");
// }

// Falsey values;

// false 
// undefined 
// null
// 0
// -0
// ''
// NaN

if (!undefined) {
    console.log('undefined');
}

console.log(!false);
console.log(!NaN);
console.log(!undefined);
console.log(!0);
console.log(!-0);
console.log('');

console.log(!true);