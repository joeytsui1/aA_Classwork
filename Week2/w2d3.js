function everyCombination (students) {
    let pairs = []

    for( i = 0; i < students.length; i ++ ) {
        let name1 = students[i]
        for( j = 0; j < students.length; j ++ ) {
            let name2 = students[j]
            pairs.push(name1,name2)
        }
    }

    return pairs
}

function pairStudent (arr) {
    let uniquePair = []

    for (i = 0; i < arr.length; i ++ ) {
        let name1 = arr[1]
        for (j = i + 1; j < arr.length; i ++) {
            let name2 = arr[i]
            uniquePair.push(name1, name2)
        }
    }
}

let matrix = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let singleArray = [1,2,3,4,5]

function traverse(array) {
    for(i = 0; i < array.length; i ++ ) {
        for ( j = 0; j < array[i].length; j++)
        console.log(array[i][j])
    }
}

traverse(matrix)