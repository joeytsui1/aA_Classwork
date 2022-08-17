let obj = {
    a: [1,2,3],
    b: [4,5,6],
    c: [7,8,9]
}

console.log(obj.a)
console.log(obj.c)





// SCOPES

let myName = 'global'

function function1 () {
    myName = 'func1'
    console.log(myName)
}

function function2 () {
    myName = "func2"
    console.log(myName)
}

console.log(myName)
function1()
function2()
console.log(myName)


