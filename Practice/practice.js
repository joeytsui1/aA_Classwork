// // Max in column 2D ARRAYS

// function maxInColumn (matrix) {
//     let arr = []
//     for (let j = 0; j < matrix[0].length; i++) {  // looping the width of the inner array 
//         let max = matrix[0][j]                    
//         for (let i = 1; i < matrix.length; i++) { // looping through the outer array so we would be looking at the first index in the first array then second then third.
//             if (matrix[i][j] > max) {             // then looking at the second indexes of each array while finding the max and pushing it to the array
//                 max = matrix[i][j]
//             }
//         }
//         arr.push(max)
//     }
//     return arr
// }

// // Matrix Addition

// function matrixAddition (m1, m2) {
//     let sum = []
//     for (let i = 0; i < m1.length; i++) { // loop through the the height of the the matrix 
//         let subArr = []
//         for (let j = 0; j < m1[i].length; j++) { //looping throught the width or the column of the array
//             subArr.push(m1[i][j] + m2[i][j]) // adding the values from the indexes we are lookng at both matrixes and putting it in the sub arr
//         }
//         sum.push(subArr) // and pushing the sub arr to the final arr that we are going to return when the for loop is finish
//     }
//     return sum
// }

// function luckyNumbers (matrix) {
//     let maxCol = []
//     let minRow = []
//     for (let j = 0; j < matrix[0].length; j++) {
//         let max = matrix[0][j]
//         for (let i = 1; i < matrix.length; i++) {

//             if (matrix[i][j] > max) {
//                 max = matrix[i][j]
//             }
//         }
//         maxCol.push(max)
//     }
//     for (let i = 0; i < matrix.length; i++) {
//         let min = matrix[i][0]
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] < min) {
//                 min = matrix[i][j]
//             }
//         }
//         minRow.push(min)
//     }
//     for (let i = 0; i < minRow.length; i++) {
//         let ele = minRow[i]
//         if (maxCol.includes(ele)) {
//             return ele
//         }
//     }
//     return -1
// }

// function spiralOrder(matrix) {
//     let iStart = 0
//     let iEnd = matrix.length-1
//     let jStart = 0
//     let jEnd = matrix[0].length-1
//     let arr = [];

//     while (iStart < iEnd || jStart < jEnd) {
//         let j = jStart;
//         while (j <= jEnd) {
//             arr.push(matrix[iStart][j])
//             j++;
//         }
//         iStart++;
//         let i = iStart;
//         while (i <= iEnd) {
//             arr.push(matrix[i][jEnd]);
//             i++;
//         }
//         jEnd--;
//         j = jEnd
//         while (j >= jStart) {
//             arr.push(matrix[iEnd][j])
//             j--;
//         }
//         iEnd--;
//         i = iEnd;
//         while (i >= iStart) {
//             arr.push(matrix[i][jStart])
//             i--;
//         }
//         jStart++;
//         j = jStart;
        
//     }
//     return arr
// }


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]


function spiralOrder (matrix) {
    let startRow = 0
    let endRow = matrix.length-1
    let startCol = 0
    let endCol = matrix[0].length-1
    let arr = []

    while (startRow <= endRow && startCol <= endCol) { 

        for (let col = startCol; col <= endCol; col++ ) {  // adding the top row of the matrix
            arr.push(matrix[startCol][col])
  
        }
        startRow++ 

        if (startRow > endRow){
            break;
        }

        for (let row = startRow; row <= endRow; row++) {
            arr.push(matrix[row][endCol]) 
            
        }
        endCol--

        //BOT ROW
        for (let col = endCol; col >= startCol; col--) {
            arr.push(matrix[endRow][col])
            }
        endRow--

    
        for (let row = endRow; row >= startRow; row--) {
            arr.push(matrix[row][startCol]) 
            }

        startCol++
    }
    return arr
}

let arr = [
    ['X','O','O'],
    ['X','O','X'],
    ['O','X','X']
]

let arr1 = [
    ['X','X','O'],
    ['X','O','O'],
    ['X','O','X']
]

let arr2 = [
    ['O','X','O'],
    ['O','X','X'],
    ['X','O','O']
]

function ticTacToe (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === matrix[i][j+1] && matrix[i][j] === matrix[i][j+2]) {
                return true
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let colArr = []
        for (let j = 0; j < matrix[i].length; j++) {
            colArr.push(matrix[j][i])
        }

        for (let i = 0; i < colArr.length; i++) {
            if(colArr[i] === colArr[i+1] && colArr[i+1] === colArr[i+2]) {
                return true
            }
        }
    }


    if (matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
        return true
    } else if (matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
        return true
    }
    return false
}

console.log(ticTacToe(arr))
console.log(ticTacToe(arr1))
console.log(ticTacToe(arr2))





function climbTree(treeType) {
    let treeString = "You climbed a ";
  
    function sayClimbTree() {
      // this inner function has access to the variables in the outer scope
      // in which it was defined - including any defined parameters
      return treeString + treeType;
    }
  
    return sayClimbTree();
  }
  
  // We assign the result to a variable
  const sayFunction = climbTree("Pine");
  
  // So we can call it, and indeed the variables have been saved in the closure
  // and the sayFunction prints out their values.
  console.log(sayFunction); // You climbed a Pine


  class Person  {
    constructor(name, height, weight, color) {
        this.name = name,
        this.height = height,
        this.weight = weight,
        this.color = color
    }
    addWeight(num) {
        this.weight += num
    }
  }

  let p1 = new Person("Jonathan", "5'8", 155, "brown")