// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  // best soluton
let reversed = '';
for(let character of str) {
  reversed = character + reversed
}
return reversed


// 2nd best solution
const arr = str.split('')
arr.reverse()
return arr.join('')

return str.split('').reverse().join('')

// rare soluton but a good One
  return str.split("").reduce((rev, char)=> char + rev, '');


}

reverse("hello")




module.exports = reverse;
