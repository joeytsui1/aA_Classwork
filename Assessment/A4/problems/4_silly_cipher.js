/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/

// function sillyCipher(sentence, cipher){
//   let char = sentence.split('')
//   let arr = []

//   for (let i = 0; i < char.length; i ++ ) {
//       let ele = char[i]
//     if (cipher[ele] !== undefined) {
//       arr.push(cipher[ele])
//     } else {
//       arr.push(".")
//     }
//   }
//   return arr.join('')
// }

function sillyCipher (sentence, cipher) {
  let newSen = ''

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i]

    if (cipher[char] !== undefined) {
      newSen += cipher[char]
    } else {
      newSen += '.'
    }
  }
  return newSen
}

console.log(sillyCipher("twmce", { m : "n", t : "d", w : "a"}))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
