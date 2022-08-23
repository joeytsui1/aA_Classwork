/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/
let cardObj = {
    "J" : 1,
    "Q" : 2,
    "K" : 3
}

function playerScore (hand) {
    let score = 0

    for (let i = 0; i < hand.length; i++) {
        let ele = hand[i]

        if (cardObj[ele] !== undefined) {
            score += cardObj[ele]
        }
    }
    return score
}

function winningHand(hand1, hand2) {
    let score1 = playerScore(hand1)
    let score2 = playerScore(hand2)

    if (score1 === score2) {
        return "DRAW"
    } else if(score1 > score2) {
        return hand1
    } else {
        return hand2
    }
}
console.log(winningHand('JQKJ', 'QQJJ'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = winningHand;
