// // // // DAY 3 LOOPS
// function printRange(start, end) {
//     for (let i = start; i <= end; i++) {
//         console.log(1)
//     }
// }

// printRange(1,10);

// function printRange2(start, end){
//     let i = start;

//     while(i <= end){
//         console.log(1);

//         i++;
//     }
// }

// printRange2(1,10);

// function printChars(sentence){
//     for(let i=0; i< sentence.length; i++){
//         let currentChar = sentence[i];

//         console.log(currentChar);
//     }
// }

// printChars('Hi my name is Kevin');
// // infinite loop
// function printChars2(str){
//     for (let i = 0; i<= 10; i--){
//         console.log(1)
//     }
// }

// function skipEvenNums(num){
//     for (let i = 0; i < num; i++){
//         if (i % 2 === 0){
//             continue
//         }
//     }
// }



// // // isPrime
// // // Define a function `isPrime(number)` that returns `true` if `number` is prime.
// // // Otherwise, false. Assume `number` is a positive integer.

function isPrime(num){
    if(num < 2){
        return false
    }

    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false
        }
    } 
    return true
}

// console.log(isPrime(2))

// // // Define a function `logBetween(lowNum, highNum)` that will print every number
// // // from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// // // `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// // // it does not need to return.
// // //
// // // Examples:
// // //
// // // logBetween(-1, 2); // prints
// // // -1
// // // 0
// // // 1
// // // 2
// // //
// // // logBetween(14, 6); // prints nothing
// // //
// // // logBetween(4,6); // prints
// // // 4
// // // 5
// // // 6

// function logBetween(lowNum, highNum){
//     for (let i = lowNum; i <= highNum; i++)
//     console.log(i)
// }
// logBetween(-1,2);
// logBetween(14, 6)
// logBetween(4,6)

// // // Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// // // parameters. The function should print out numbers between `min` and `max` at `step`
// // // intervals. See the following examples.
// // //
// // // Examples:
// // //
// // // logBetweenStepper(5, 9, 1) // prints
// // // 5
// // // 6
// // // 7
// // // 8
// // // 9
// // //
// // // logBetweenStepper(-10, 15, 5) // prints
// // // -10
// // // -5
// // // 0
// // // 5
// // // 10
// // // 15

// function logBetweenStepper(min, max, step){
//     for (let i = min; i<= max; i+=step)
//     console.log(i)
// }
// logBetweenStepper(5, 9, 1)
// logBetweenStepper(-10, 15, 5)

const logBetweenStepper = (min, max, step) =>{
    for (let i = max; i <= max; i+=step){
        console.log(i)
    }
}



// // // Write a function `printFives(max)` that prints out the multiples of 5 that are
// // // less than max.
// // //
// // // Try to solve this in two ways, using a conditional (if) and without using a
// // // conditional
// // //
// // // Example:
// // //
// // // printFives(20) // prints
// // // 0
// // // 5
// // // 10
// // // 15

// function printFives(max){
//     for (i = 0; i < max; i+=5){
//         console.log(i)
//     }
// }

// printFives(20)

// function printFives(max){
//     for (i = 0; i < max; i++){
//         if(i % 5 === 0){
//             console.log(i)
//         }
//     }
// }

const printFives = num => {
    for (let i =0; i < max; i++){
        if(i % 5 ===0){
            console.log(i)
        }
    }
}

const printFivs = num => {
    for(let i = 0; i < max; i+5){
        console.log(i)
    }
}

// // Write a function `printReverse(min, max)` that print out all numbers from max
// // to min (exclusive), in reverse order.
// //
// // Examples
// //
// // printReverse(13, 18) // prints
// // 17
// // 16
// // 15
// // 14
// //
// // printReverse(90, 94) // prints
// // 93
// // 92
// // 91

// function printReverse(min, max){
//     for(i = max - ; i > min; i--){
//         console.log(i)
//     }
// }

// printReverse(90,94)
// printReverse(13,18)

// // Write a function `sumNums(max)` that returns the sum of all positive numbers less
// // than or equal to max.
// //
// // Examples:
// //
// // sumNums(4); // => 10
// // sumNums(10); // => 55
// // sumNums(365); // => 66795

// function sumNums(max) {
//     let sum = 0
//     for (let i=0; i <= max; i++){
//         sum+=i
//     }
//     return sum
// }

// console.log(sumNums(4))
// console.log(sumNums(10))
// console.log(sumNums(365))

// // Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// // is a factor of `number`. `false` otherwise. A factor is a number that divides
// // another number without a leftover remainder.
// //
// // Examples:
// //
// // Define a function `fizzBuzz(max)` that takes a number and prints  every number
// // from 0 to `max` that is divisible by either 3 or 5, but not both.
// //
// // Examples:
// //
// // isFactorOf(6,2); // => true
// // isFactorOf(-6, 2); // => true
// // isFactorOf(5,0); // => false
// // isFactorOf(22, 7); // => false

// function isFactorOf(number, factor){
//     if (number % factor === 0){
//         return true 
//     } else {
//         return false
//     }
// }

function isFactorOf(number, factor){
    return num % factor === 0
}

// isFactorOf(6,2)
// isFactorOf(-6, 2) 
// isFactorOf(5,0)
// isFactorOf(22, 7)


// // Define a function `fizzBuzz(max)` that takes a number and prints  every number
// // from 0 to `max` that is divisible by either 3 or 5, but not both.
// //
// // Examples:
// //
// // fizzBuzz(20); // prints
// // 3
// // 5
// // 6
// // 9
// // 10
// // 12
// // 18

// function fizzBuzz(max){
//     for (i=0; i < max; i++){
//         let divByFive = i % 5 === 0
//         let divByThree = i % 3 === 0

//         if((divByFive || divByThree) && !(divByFive && divByThree)){
//             console.log(i)
//         }
//     } 
// }

// fizzBuzz(20)

// // function func1(num){
// //     return num + 50
// // }

// // function func2(num){
// //     return num + " bottles of beers on the wall"
// // }

// // function func3(num){
// //     let x = func1(num)
// //     return func2(x)
// // }

// // let result = func3(5)
// // console.log(result) //I think that this will print 55 bottles of beer on the wall

// let foo = function(name){
//     return "Dance " + name + ",dance! "
// }

// let bar = function(){
//     let str = ""

//     for (let i = 0; i < 3; i+=1){
//         str += foo("Anthony")
//         str += foo("Haseeb")
//         str += foo("Winnie")
//         str += " | "
//     }

//     return str
// }

// let result = bar();
// console.log(result)

// function sayHiNTimes(n){
//     let i = 0;

//     while(i < n ){
//         console.log("Hi")
//     }
// }

// console.log(sayHiNTimes(1))
// console.log(sayHiNTimes(2))

// the problem with this function is that theres no increment in the function,
//so i will always be at zero and i will always be less than n which will
// always print out the console.log("hi") infinitely 

function isFive(a){
    if (a === 5 ){
        return true 
    } else {
        return false
    }
}

console.log(isFive(5))
console.log(isFive(1))

// function printForwards(start, end) {
//     for (let counter = start; counter <= end; counter++) { 
//         console.log(counter);
//     }
// }

// printForward(4, 11);

// function printBackwards(start, end) {
//     let i = end;
//     while (i >= start) {
//         console.log(i);
//         i--;
//     }
// }

// printBackwards(-5, 6)