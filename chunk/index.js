// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]




function chunk(arr, size) {
let new_array = []

arr.forEach(element => {
  const last = new_array[new_array.length - 1]
  if (!last || last.length == m)
});(element => {

})

}


ar = ["hi", "hello", "hola", "bonjour"]
chunk(ar, 2)

module.exports = chunk;

// function chunk(array, size) {
// let array = []
//
// for (let element of array) {
//   const last = array[array.length - 1]
//   if (!last || last.length === size ) {
//     array.push([element])
//     console.log(last, "first check")
//   }
//   else {
//     last.push(element)
//     console.log(element, 'second check')
//   }
// }
// return array
// console.log(array)
// }
