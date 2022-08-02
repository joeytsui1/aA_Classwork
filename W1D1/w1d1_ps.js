// ## Problem Set W1D1

// This problem set will test your understanding of how JavaScript is evaluated.
// Check your answers by running the lines code. Type out these expressions and avoid
// copy & paste. Get used to typing JavaScript! Some of these answers are obvious but
// run the code anyway to get familiar with the workflow for running JavaScript.


// ### Expression Evaluation Round 1

// Predict what the following JavaScript expressions will evaluate to. Open your command
// line and use the **Node REPL** to check if you are correct.

console.log(4 + 4 / 2); // 6
console.log((2 + -7) * 3); // -27
console.log(101 % 10); // 1
console.log(12 - 4 % 3); // 11
console.log(true && false); //false
console.log(true && !(false || false)); //true
console.log(!true && !(false || false)); //false
console.log('cat' + 'dog'); // catdog
console.log(2 + 'pizza'); // 2pizza
console.log(2.5 * 'fish'); //NaN
console.log(5 >= 11); //false
console.log(5 === 5.0); //true
console.log(7 !== 7.1); //true
console.log(5 + 5 > 8); //true
console.log(6 + 6 !== 12); //false
console.log(2 > 1 || false); //true
console.log('true' === true) //false
console.log(10 % 2 === 0); //true
console.log(21 % 2 === 0); // false, remainder 1
console.log(21 % 2 !== 0); //true
console.log(21 % 2 === 1); //true
console.log(12 % 3 === 0); //true
console.log(9 % 3 === 0); //true
console.log(14 % 3 === 0); //false, remainder 2
console.log('new york'[0]); // n
console.log('new york'[1]); // e
console.log('san francisco'[2 * 3]); // a
console.log('bootcamp'[3].toUpperCase()); //T
console.log('bootcamp'.indexOf('T')); //-1
console.log('bootcamp'.indexOf('camp')); //4
console.log('bootcamp'.indexOf('o') > -1); //true
console.log('science'.indexOf('x') === -1); //true


// // ### Expression Evaluation Round 2

// // Predict what the `console.log` lines will print out. Test your work by writing
// // these code snippets to `.js` files and running them. Put each snippet into it's own
// // `.js` file and see what the `console.log`s print out. Reference the `running_javascript`
// // reading for how to run `.js` files.

// // 1
var idx = 'abcde'.indexOf('D'); //-1
idx = idx + 11; //10
console.log(idx); // 10
idx * 2;
console.log(idx); // 10



// // 2
var num = 33;
var isEven = num % 2 === 0; //false
console.log(isEven); // false
console.log(!isEven); // true



// // 3
var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;
console.log(num); // 4
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // C
var char = str2[num].toLowerCase(); // c
console.log(char + '!'); // c!


// // 4
var sentence = 'welcome to bootcamp prep';
var lastChar = sentence[sentence.length - 1];
console.log(lastChar); // p
console.log(sentence.indexOf(lastChar)); // 18


// // ### Conditionals

// // Predict what will happen in the following examples. Which `console.log`s will actually
// // print?
// // To check your work, type these code snippets to `.js` files. No copy and pasting!
// // After, feel free to play around with the variable (by assigning your own value)
// // in each example to experiment!


// // 5
var age = 25; // try different numbers here
if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}



// // 6
var str = 'handball'; // try different strings here
if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}



// // 7
var num = 25; // try different numbers here
if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}



// // 8
var num = 33; // try different numbers here
if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}



// // 9
var str = 'HanbalL'; // try different strings here
if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}



// // 10
var num = -33; // try different numbers here
if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}


// // ### Conditional Muscle Memory

// // Practice typing the syntax for conditionals. **Type each snippet 10 times each to
// // burn the muscle memory into your typing fingers!** Be sure to use proper spacing and
// // indentation, type it **exactly** as shown below. Run the code after each time to make
// // sure it runs. You'll realize how easy it is to forget parentheses or braces. Syntax
// // errors like this will cause your code to be totally misunderstood by the computer.
// // Practice, practice, practice!


// var num = 11; // feel free to change the value of this variable
// if (num > 5) {
//   console.log('if');
// }

var num = 11;
if (num > 5) {
  console.log('if');
}

var num = 11; 
if (num > 5) {
  console.log('if');
}

var num = 11; 
if (num > 5) {
  console.log('if');
}

var num = 11;
if (num > 5) {
  console.log('if');
}

var num = 11;
if (num > 5){
  console.log('if');
}

var num = 11;
if (num > 5) {
  console.log('if');
}

var num = 11;
if(num > 5) {
  console.log('if');
}

var num = 11;
if(num > 5) {
  console.log('if');
}

var num = 11;
if (num > 5) {
  console.log('if');
}

var num = 11; 
if (num > 5) {
  console.log('if');
}
// var num = 5; // feel free to change the value of this variable
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }

var num = 5;
if (num > 5){
  console.log('if');
} else {
  console.log('else');
}

var num = 11; 
if(num > 5){
  console.log('if')
} else {
  console.log('else');
}

var num = 11;
if(num > 5) {
  console.log('if');
} else {
  console.log('else');
}

var num = 11;
if(num > 5) {
  console.log('if');
} else {
  console.log('else');
}

var num = 11;
if(num > 5) {
  console.log('if');
} else {
  console.log('else');
}

var num = 11;
if(num > 5) {
  console.log('if');
} else{
  console.log('else');
}

var num = 11;
if(num > 5) {
  console.log('if');
} else {
  console.log('else');
}

var num = 11;
if(num > 5) {
  console.log('if');
} else {
  console.log('else');
}

var num = 11;
if( num > 5) {
  console.log('if');
} else {
  console.log('else');
}

var num = 11; 
if (num > 5) {
  console.log('if');
} else {
  console.log('else');
}

// var num = 0; // feel free to change the value of this variable
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

var num = 0; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

