/***********************************************************************
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.

Use this alphabet array to help:

var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

Examples:

shiftChars('able', 1); // => 'bcmf'
shiftChars('apple', 2); //=> 'crrng'
shiftChars('bootcamp', 3); //=> 'errwfdps'
shiftChars('zebra', 5); //=> 'ejgwf'
***********************************************************************/

function shiftChars(word, num) {
  var alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];
  
  let str = ''

  for (let i = 0; i < word.length; i++) {
    let char = word[i]

    if (alphabet.indexOf(char) !== -1) {
      str += alphabet[(alphabet.indexOf(char) + num) % 26]
    }
  }
  return str
}

// function shiftChars (word, num) {
//   var alphabet = [
//     'a','b','c','d','e','f','g','h','i','j','k','l','m',
//     'n','o','p','q','r','s','t','u','v','w','x','y','z'
//   ];

//   let newStr = ''

//   for (let i = 0; i < word.length; i++) {
//     let char = word[i]

//     if (alphabet.indexOf(char) !== -1) {
//       newStr += alphabet[(alphabet.indexOf(char) + num) % 26]
//     }
//   }
//   return newStr
// }

function shiftChars (word, num) {
  var alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];

  let newStr = ''

  for (let i = 0; i < word.length; i++) {
    let char = word[i]
    let idx = alphabet.indexOf(char)

    newStr += alphabet[(idx + num) % 26]

  }
  return newStr
}
console.log(shiftChars('ablz', 1))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shiftChars;
