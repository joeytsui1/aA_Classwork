/***********************************************************************
Write a function `objectSize(obj)` that takes in an object and returns
the number of key-value pairs in the object.

Examples:

var obj1 = {
  name: 'Fido',
  age: '4'
}

objectSize(obj1); // => 2

var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
}

objectSize(obj2); // => 3
***********************************************************************/

var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
}

// function objectSize(obj) {
//   let arr = []
//   let counter = 0

//   for (let key in obj) {

//     if (!(arr.includes(key))) {
//       arr.push(key)
//     }
//   }

//   for (let i = 0; i < arr.length; i ++ ) {
//     counter += 1
//   }
//   return counter
// }

// function objectSize (obj) {
//   let arr = []
//   let counter = 0

//   for (let key in obj) {
//     if (!arr.includes(key)) {
//       arr.push(key)
//     }
//   }

//   for (let i = 0; i < arr.length; i ++) {
//     counter += 1
//   }
//   return counter
// }

function objectSize (obj) {
  let counter = 0

  for (let key in obj) {
    counter += 1
  }
  return counter
}
console.log(objectSize(obj2))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = objectSize;
