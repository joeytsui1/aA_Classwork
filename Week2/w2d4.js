// strings are non-mutable ex:
let str = 'hello'

str[0] = 'x'

console.log(str)

// array are mutable ex:

let arr = [ 'h','e','l','l','o']

arr[0] = 'x'

console.log(arr)

// common methods for strings and array
[index]
.length
.indexOf(ele)
.concan

// styling

function skip() {
    for( let i = 1; i< 10; i ++ ){
        if( i===5) {
            continue
        }
    }
}