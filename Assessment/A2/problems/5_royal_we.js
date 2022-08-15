/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  let splitSen = sentence.split(" ")
  let arr = []

  for (i = 0; i < splitSen.length; i++ ) {
    let words = splitSen[i]
    if (words === 'I') {
      arr.push('we') 
    } else if ( words === 'mine') {
      arr.push('ours')
    } else if (words === 'my') {
      arr.push('our')
    } else if (words === 'me') {
      arr.push('us')
    } else {
      arr.push(words)
  }
}
  return arr.join(" ")
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
