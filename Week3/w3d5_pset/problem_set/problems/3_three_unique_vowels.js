/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/

// function threeUniqueVowels(string) {
//     let vowels = "aeiou".split("")
//     let count = 0

//     for (let i = 0; i < vowels.length; i ++ ) {
//         let vowel = vowels[i]

//         if (string.includes(vowel)) {
//             count += 1
//         }

//         if (count >= 3) {
//             return true
//         }
//     }
//     return false
// }

function threeUniqueVowels (string) {
    let vowels = "aeiou".split('')
    let count = 0

    for (let i = 0; i < vowels.length; i++) {
        let vowel = vowels[i]

        if (string.includes(vowel)) {
            count += 1
        }

        if (count >= 3) {
            return true
        }
    }
    return false
}
console.log(threeUniqueVowels('delicious'))
console.log(threeUniqueVowels('bootcamp prep'))
console.log(threeUniqueVowels('dog'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeUniqueVowels;
