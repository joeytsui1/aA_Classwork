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
console.log(notNegative);

//<array>.some() - Returns the boolean 'true' if any element within the array returns true when passed into an anonymous call back function
//Returns false if all elements withtin the array returns false

let nums2 = [5,20,100];
let containsNegative = nums2.some((ele) => {
    if(ele > 10) {
        return true;
    }
    return false;
})
console.log(containsNegative);





