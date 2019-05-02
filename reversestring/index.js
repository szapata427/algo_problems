// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {


// let string_array = str.split("")
// console.log(string_array)
// let reversed = ""
// while (string_array.length > 0) {
//   console.log(reversed += string_array.pop())
// }


//best solution
let reversed = ""
for (let character of str) {
  reversed = character + reversed
  console.log(reversed)
}

return reversed


// str.split("").reduce((reverse, character) => {
//   return reversed = reverse + character
// }, "")


// rare soluton but a good One
  // return str.split("").reduce((rev, char)=> char + rev, '');


}

reverse("hello")




module.exports = reverse;
