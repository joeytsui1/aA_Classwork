/***********************************************************************
Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note 
can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Examples:
canConstruct("a", "b");               // => false
canConstruct("a", "aa");              // => true
canConstruct("ababc", "dbaccab");     // => true
canConstruct("aabbc", "aaaabbbdef");  // => false
***********************************************************************/
// function eleCount(str) {
//     const count = {};
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] in count) {
//         count[str[i]]++;
//       } else {
//         count[str[i]] = 1;
//       }
//     }
  
//     return count;
//   }

// function canConstruct(ransomNote, magazine) {     
//     const magCount = eleCount(magazine);            
//     const noteCount = eleCount(ransomNote);        
  
//     for (let char in noteCount) {
//       const numLetters = noteCount[char];
  
//       if (magCount[char] === undefined || magCount[char] < numLetters) {
//         return false;
//       }
//     }
  
//     return true;
//   }

function eleCount (str) {
  let obj = {}

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (char in obj) {
      obj[char] += 1
    } else {
      obj[char] = 1
    }
  }
  return obj
}

function canConstruct (ransom, magazine) {
  let ransomObj = eleCount(ransom)
  let magazineObj = eleCount(magazine)

  for (let key in ransomObj) {
    let letterCount = ransomObj[key]

    if (magazineObj[key] === undefined || magazineObj[key] < letterCount) {
      return false
    }
  }
  return true
}
console.log(canConstruct("a", "b"))
console.log(canConstruct("a", "aa"))
console.log(canConstruct("ababc", "dbaccab"))
console.log(canConstruct("aabbc", "aaaabbbdef"))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
