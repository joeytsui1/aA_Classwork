/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
    let splitSen = sentence.split(' ')
    let arr = []

    for(i = 0; i < splitSen.length; i++ ) {
        let words = splitSen[i]
        let firstChar = words[0].toUpperCase() 
        let lastChar = words[words.length -1].toUpperCase()
        let midChar = words.slice(1, -1).toLowerCase()
        let newWord = firstChar + midChar + lastChar
        arr.push(newWord)
    }
    return arr.join(' ')
}

console.log(firstLastCap('hello BOOTCAMP PrEp'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
