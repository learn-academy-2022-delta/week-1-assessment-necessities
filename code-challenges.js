// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

    // I need to declare a function with two inputs, i will call them string1 and string 2 
    // the function needs to return the string that has more characters in it, so i will use the .length method to determine the length then i will use a if statement to compare the two values

    // i forgot for a moment that i could pass a named variable into the parameters where string1 and string 2 are here, so i debated on just putting the fruit1 and fruit2 variables directly into the function but i realized that would not work since there is a second set of variables


const stringCompare = (string1, string2) => {
    if (string1 > string2 ) {
        return string1
    } else if ( string1 < string2) {
        return string2
    } else {
        return "Neither string is has more characters"
    }
}

    // I added this error message because I saw it in the demo, remembering to put an else statement if all other options dont work is hard

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

console.log(stringCompare(fruit1, fruit2))

console.log(stringCompare(fruit3, fruit4))

    // when i ran the code I initially I got 

    // learnacademy@LEARNs-MacBook-Air-5 week-1-assessment-necessities % node code-challenges.js
    // banana
    // undefined
    // cherry
    // undefined

    // so I had to rewrite my code to return string1 and string2 instead of console.log(string1) or console.log(string1); I'm not sure why this solution did not work

    // const stringCompare = (string1, string2) => {
    //     if (string1 > string2 ) {
    //         console.log(string1)
    //     } else if ( string1 < string2) {
    //         console.log(string2)
    //     } else {
    //         return "Neither string is has more characters"
    //     }
    // }

// I'm also going to add these sperators because the output is getting confusing in later problems
    console.log("--- problem 1 ---")
// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:

    // I'll declare a function that takes in one number input and then use a if else statement by comparing the number to the boiling pint number 212 and output whether it is above, below, or at boiling point.

const boilComp = (temp) => {
    if (temp === 212) {
        return (`${temp} is at boiling point` )
    } else if ( temp > 212) {
        return `${temp} is above boiling point`
    } else if (temp < 212) {
        return `${temp} is below boiling point`
    }
}

const temp1 = 42
const temp2 = 350
const temp3 = 212

console.log(boilComp(temp1))
console.log(boilComp(temp2))
console.log(boilComp(temp3))

    // learnacademy@LEARNs-MacBook-Air-5 week-1-assessment-necessities % node code-challenges.js
    // banana
    // kiwi
    // undefined
    // 350 is above boiling point
    // 212 is at boiling point
    // learnacademy@LEARNs-MacBook-Air-5 week-1-assessment-necessities % 

    // yup getting an undefined for some reason... lol; finally googled it " randomly getting undefined in my function outputs javascript" - every if else needs a return statement and I didnt have one for a few of the iterations. fixed it and now: 

    //learnacademy@LEARNs-MacBook-Air-5 week-1-assessment-necessities % node code-challenges.js
    // banana
    // kiwi
    // 42 is below boiling point
    // 350 is above boiling point
    // 212 is at boiling point
    // learnacademy@LEARNs-MacBook-Air-5 week-1-assessment-necessities % 


    console.log("--- problem 2 ---")
// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

    // Pseudo code:
    // I'll declare an function that takes two inputs. the function needs to combine the two arrays and return the total length. I'll do that by useing the .concat() method to combine them then I will return the the value with the .length method.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const arrayCombine = (array1, array2) => {
   
    return  array1.concat(array2).length

}
console.log(arrayCombine(myNumbers1, myNumbers2))

    // I actually got 5 an an output, here is my code: 
    // const arrayCombine = (array1, array2) => {
    //     array1.concat(array2)
    //     return array1.length

    // }
    // console.log(arrayCombine(myNumbers1, myNumbers2))
    // I'm going to change up the code and combine the methods all onto that array1 and see if it works

    // Yes; once i created this  array1.concat(array2).length on like 117 it now returns 10.

    console.log("--- problem 3 ---")
// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code: I will declare a function named reverseString that will take one string input and reverse it then output the value. I may take the string and assign each element to a array then reverse it then 

// actually i might do a for loop and interate through the string assigning the values to an array then reverse it

const currentCohort = "Delta 2022"
    // var reverseSt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11]

    // const reverseString = (inputA) => {
    // for (i = 0; i < inputA.length; i++) {
    //     reverseSt.unshift[inputA[""]]
        
    // }
    // console.log(reverseSt)
    // }
    // reverseString(currentCohort)

    // my code was not working so I started looking at my notes

//console.log(currentCohort.split(""))

reverseStr = currentCohort.split("")

 // I had to google how to reverse it but the code works. 

console.log(reverseStr.reverse())
 
   

console.log("--- problem 4 ---")


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: I am going to use a for if else statement to iterate through each element ant test if its odd or even with a modulo, if its even I return the string even, if its off i will return the string odd

const myArray = [13, 34, 5, 10, 27, 42]


const balanceCheck = (array12) => {
    for (i = 0; i < array12.length ; i++) {
        if (array12[i] % 2 === 0) {
            console.log(array12[i] + " Even")
        } else {
            console.log(array12[i] + " Odd")
        }
    }
    return null
}

balanceCheck(myArray)
    // for some reason I walways expect just calling a function to output it to the console
console.log(balanceCheck(myArray))
    // The first time i tried my only output was "Odd", so I'm going in and adding console.logs to the if statements to see what they output.
    // Now I'm running into an issue where once the if else statement inside the loop returns a value it ends the loop; i had to change them to output the string to the console each time
    // My final change was to create console.log(array12[i] + " Even") as one line inside the if statement instead of two seperate console logs


    // --- problem 4 ---
    // 13 Odd
    // 34 Even
    // 5 Odd
    // 10 Even
    // 27 Odd
    // 42 Even
    // 13 Odd
    // 34 Even
    // 5 Odd
    // 10 Even
    // 27 Odd
    // 42 Even
    // undefined
// I am going to add a return null to the end of the function to stop it from returning undefined in the final code.


console.log("--- problem 5 ---")
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: I will declare a function that has a logic in there like this if number1 > number 2 then number1 - number2, else if number2 > number 1 then number2 - number1 else print numbers are even 

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const compareNumbs = (numb1, numb2) => {
    if (numb1 > numb2) {
        console.log(numb1 - numb2)
    } else if (numb2 > numb1) {
        console.log(numb2 - numb1)
    }
}

compareNumbs(number1, number2)
compareNumbs(number3, number4)

// the code works as expected

    // --- problem 5 ---
    // 42
    // 3
