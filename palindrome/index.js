// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

// believe this is the best soluton.
  str.split("").reduce((reverse, character) => {
    return reversed = character + reverse

  }, "")

return str === reversed


// not an ideal solution but a solid one.
// return str.split('').every((char, i ) => {
//   return char === str[str.length - i - 1]
// })

// let reversestring = ""
// let array = []
// for(i = 0; i < str.length; i++) {
//   array.push(str[i])
// }

// for(i = 0; i < str.length; i++) {
//   reversestring += array.pop()
// }

// return str === reversestring


// }
}
palindrome("hello")
module.exports = palindrome;
