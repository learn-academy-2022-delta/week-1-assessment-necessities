// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: I think this will log the length of the string which is 10
// b) Verify and explain: It outputs 10 to the console because the .length method counts the length of the string and the .log method outputs it's input to the console.


// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: This will output the letter l because it is the fourth element in the string greeting and is an input into the console.log function method.
// b) Verify and explain: It output the letter o because the string is zero indexed thus begins at the number 0 instead of 1. 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer: This will output the string "Ruby" since index is a variable set to 1 and Ruby is the second string located in the languages array.
// b) Verify and explain: It did output Ruby since Ruby was the second element in the languages array as an input into a console.log method.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: I think this will output the strings in the array weekendDays with all uppercase letters.
// b) Verify and explain: this code outputs an error because weekendDays is a array and the .toUpperCase method only works on strings. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
 console.log(typeof dataTypes.length)


// a) Your answer: I dont think this will output anything since typeof method should be appended as a method at the end of dataTypes. 
// b) Verify and explain: it output "number" which is the data type of the output of dataTypes.length which is '3'; typeof is its own operator that returns the data type of a value in string format
