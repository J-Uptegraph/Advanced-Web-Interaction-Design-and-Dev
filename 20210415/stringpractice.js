// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Stringhttps://developer.mozilla.org/en-US/docs/We
// Our string is
 
//   Hello there

// Assign this to a variable str, then write code that uses the single best string method to do the following things.


// 1. Return the 4th character (zero-based) in the string.

let str = 'Hello there';

str.charAt(3)

// You can also treat it like an Array and just use it to get one character instead of char at

str[3]

// 2. Return a string that repeats str 11 times.

console.log(str.repeat(11));

element.innerText = str.repeat(11);

// 3. Split the string on the space character and return an array.

str.split(" ")

// 4. Return an index representing the first instance of the letter e in the string.

str.indexOf("e")

// 5. Return an index representing the last instance of the letter e in the string.

str.lastIndexOf("e")

// 6. Return the word there by means of a string method.

str.substring(6, 11)
str.slice(6, 11)


// 7. Return a boolean value that indicates whether the letter z is found in str.

str.includes('z')

// 8. Return a version of str in upper case.

str.toUpperCase('there', 'everyone')

// 9. Return a string that replaces there in str with everyone

str.replace()

// Output your results to the console for testing. Keep track of your answers.


