/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/

function removePunctuation (word) {
    let punctuation = [";", "!", ".", "?", ",", "-"]
    let lastChar = word[word.length - 1]

    if(punctuation.indexOf(lastChar) !== -1) { // if last character have the index of any puncs in the ounctuation array does not equal to -1 which mean it have
        return word.slice(0, -1)               // then return word.slice(0, -1). the 0 index is inclusive and -1 is exclusive so it wont return the last index of word
    } else {
        return word                             // else it will just return the word as it is
    }
}

function isStopWord ( word, stopWords) {
    let noPuncWord = removePunctuation(word)   // we are calling the removePuncs function and setting it to the varible noPuncsWord in the isStopWord function

    return stopWords.includes(noPuncWord)      // this will return a boolean if noPuncWords includes the stop word or not
}

function titleize(title, stopWords) {
    let titleArr = title.split(' ')
    let arr = []

    for ( i = 0; i < titleArr.length; i++ ) {
        let value = titleArr[i].toLowerCase()
        if (isStopWord(value, stopWords)) {
            arr.push(value)
        } else {
            value = value[0].toUpperCase() + value.slice(1)
            arr.push(value)
        }
    }
    return arr.join(' ')
}
console.log(titleize("shall we dance?", ["dance"]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = titleize;
