/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/
function getVowel (word) {
    let vowelCounter = 0
    let vowels = "aeiou"
    
    for (let i = 0; i < word.length; i++) {
        let char = word[i]

        if (vowels.includes(char)) {
            vowelCounter += 1
            if (vowelCounter === 2) {
                return i
            }
        }
    }
    return word.length
}

function nickname(name) {
    let newStr = ''
    let secondVowel = getVowel(name)
    
    let str = name.toUpperCase().slice(0, secondVowel + 1)

    newStr =  str + "-" + str

    return newStr
}

console.log(nickname('manuel'))
console.log(nickname('bob'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nickname;
