// JavaScript Exercise-1
// Topics covered:
// Variables, data types, and operators
// Conditional statements and loops


// 1. Write a function that takes two numbers as arguments and returns their sum.
// Define a function that takes two parameters
function sumNumbers(num1, num2) {
    // Add the two parameters and store the result in a variable
    const sum = num1 + num2;
    // Return the sum
    return sum;
  } 
  // Call the function and output the result to the console
  console.log(sumNumbers(5, 10)); // Output: 15
/*The function is named sumNumbers and takes two parameters, num1 and num2, which represent the two numbers to be added together.
Inside the function, the two parameters are added using the + operator and the result is stored in a variable named sum.
Finally, the sum variable is returned by the function using the return statement.
To test the function, we can call it with two numbers as arguments and output the returned value to the console using console.log(). 
In this case, we are passing 5 and 10 as arguments, so the output will be 15.*/  


// 2.Write a function that takes a string as an argument and returns its length.
// Define a function that takes a string parameter
function getStringLength(str) {
    // Get the length of the string using the `.length` property
    const length = str.length;
    // Return the length of the string
    return length;
  }
  
  // Call the function and output the result to the console
  console.log(getStringLength("CodeHelp")); // Output: 8
/* The function is named getStringLength and takes one parameter, str, which represents the string whose length is to be determined.
Inside the function, the length of the string is obtained using the .length property, which returns the number of characters in the string.
Finally, the length of the string is returned by the function using the return statement.
To test the function, we can call it with a string as an argument and output the returned value to the console using console.log(). In this case, we are passing "Hello, world!" as the argument, so the output will be 13, which is the length of the string. */


// 3.Write a program that takes two numbers and displays their sum, difference, product, and quotient.
// Declare and initialize two variables with number values
const num1 = Number(21);
const num2 = Number(43);
// Declare and initialize four more variables with arithmetic operations performed on num1 and num2
const sum = num1 + num2; // Add num1 and num2
const diff = num1 - num2; // Subtract num2 from num1
const product = num1 * num2; // Multiply num1 and num2
const quotient = num1 / num2; // Divide num1 by num2

// Output the values of the four variables to the console, with descriptive labels
console.log(`Sum: ${sum}`); // Sum: 64
console.log(`Difference: ${diff}`); // Difference: -22
console.log(`Product: ${product}`); // Product: 903
console.log(`Quotient: ${quotient}`); // Quotient: 0.4883720930232558
/*The code declares two variables num1 and num2 with numeric values using the Number() constructor. It then performs arithmetic operations on num1 and num2 to compute the sum, difference, product, and quotient, and stores these results in separate variables.
Finally, the code outputs the values of these variables to the console using console.log(), with descriptive labels to indicate which result corresponds to which arithmetic operation. */


// 4.Write a function that takes two numbers as arguments and returns the larger number.
// Define a function that takes two number parameters
function findLargerNumber(num1, num2) {
    // Check if num1 is greater than num2
    if (num1 > num2) {
      // If so, return num1
      return num1;
    } else {
      // If not, return num2
      return num2;
    }
  }
  // Call the function and output the result to the console
  console.log(findLargerNumber(5, 10)); // Output: 10
  /*The function is named findLargerNumber and takes two parameters, num1 and num2, which represent the two numbers to be compared.
Inside the function, an if statement is used to check if num1 is greater than num2. If so, num1 is returned, otherwise, num2 is returned.
To test the function, we can call it with two numbers as arguments and output the returned value to the console using console.log(). In this case, we are passing 5 and 10 as arguments, so the output will be 10, which is the larger of the two numbers. */


// 5.Write a program that displays a string in reverse order.
// Define the string to reverse
const originalString = "CodeHelp";
// Define a function that takes a string parameter
function reverseString(str) {
  // Convert the string to an array, reverse the array, then join it back into a string
  const reversedString = str.split("").reverse().join("");
  // Return the reversed string
  return reversedString;
}
// Call the function with the original string and output the result to the console
console.log(reverseString(originalString));
/*In this program, we define a variable originalString that contains the string to be reversed, which is "CodeHelp".
Next, we define a function named reverseString that takes a string parameter str.
Inside the function, the split() method is used to convert the string into an array of characters. The reverse() method is then called on the array to reverse the order of the elements. Finally, the join() method is used to join the array back into a string.
The reversed string is then returned from the function.
To use the function, we call it with the originalString variable as the argument, and output the result to the console using console.log(). This will display "CodeHelp" in reverse order, which is "pleHedoC". */

// 6.Write a program that takes a number and checks whether it is positive, negative, or zero.
// Define a function that takes a number parameter
function checkNumber(number) {
    // Check if the number is positive
    if (number > 0) {
      console.log(`${number} is positive`);
    }
    // Check if the number is negative
    else if (number < 0) {
      console.log(`${number} is negative`);
    }
    // If neither of the above conditions are met, the number must be zero
    else {
      console.log(`${number} is zero`);
    }
  }
  
  // Call the function with various test cases to see the output
  checkNumber(10); // Output: "10 is positive"
  checkNumber(-5); // Output: "-5 is negative"
  checkNumber(0); // Output: "0 is zero"
  checkNumber(1); // Output: "1 is positive"
  checkNumber(-1); // Output: "-1 is negative"
  /*In this program, we define a function named checkNumber that takes a number parameter.
Inside the function, we use an if-else statement to check whether the number is positive, negative, or zero.
If the number is greater than 0, the first if statement will execute and print out that the number is positive.
If the number is less than 0, the second else if statement will execute and print out that the number is negative.
If neither of the above conditions are met, the third else statement will execute and print out that the number is zero.
Finally, we call the checkNumber function with three different test cases to see the output for positive, negative, and zero numbers. */


// 7.Write a program that takes a number and prints the multiplication table for that number.
// Define a function that takes a number parameter
function multiplicationTable(number) {
    // Use a for loop to iterate from 1 to 10
    for (let i = 1; i <= 10; i++) {
      // Multiply the number with the current iterator and store the result in a variable
      let result = number * i;
      // Print the multiplication table for the given number
      console.log(`${number} x ${i} = ${result}`);
    }
  }
  
  // Call the function with a test case to see the output
  multiplicationTable(5);
  /*In this program, we define a function named multiplicationTable that takes a number parameter.
Inside the function, we use a for loop to iterate from 1 to 10. For each iteration, we multiply the number with the current iterator value and store the result in a variable named result.
Then we print the multiplication table for the given number by logging a string that includes the number, the current iterator value, and the result of multiplying the number with the iterator.
Finally, we call the multiplicationTable function with a test case of 5 to see the output for the multiplication table of 5. */


// 8.Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
// Define a function that takes a number parameter
function sumOfNumbers(number) {
    // Define a variable to store the sum
    let sum = 0;
    // Use a for loop to iterate from 1 to the given number
    for (let i = 1; i <= number; i++) {
      // Add the current iterator value to the sum variable
      sum += i;
    }
    // Return the sum
    return sum;
  }
  
  // Call the function with different test cases to see the output
  console.log(sumOfNumbers(10)); // Expected output: 55
  console.log(sumOfNumbers(1)); // Expected output: 1
  console.log(sumOfNumbers(5)); // Expected output: 15
  console.log(sumOfNumbers(0)); // Expected output: 0
  console.log(sumOfNumbers(-5)); // Expected output: 0
  /*In this program, we define a function named sumOfNumbers that takes a number parameter.
Inside the function, we define a variable named sum and initialize it to 0. This variable will store the sum of all numbers from 1 to the given number.
Then we use a for loop to iterate from 1 to the given number. For each iteration, we add the current iterator value to the sum variable.
After the loop is finished, we return the sum variable, which contains the sum of all numbers from 1 to the given number.
Finally, we call the sumOfNumbers function with a test case of 10 and log the result to the console. 
- When we call the function with 10, the expected output is 55, which is the sum of all numbers from 1 to 10.
- When we call the function with 1, the expected output is 1, which is the sum of all numbers from 1 to 1 (i.e., just 1).
- When we call the function with 5, the expected output is 15, which is the sum of all numbers from 1 to 5.
- When we call the function with 0, the expected output is 0, since there are no numbers to sum.
- When we call the function with -5, the expected output is 0, since we only consider positive numbers when summing.*/


// 9.Write a program that takes a string and prints out the number of vowels in the string.
// function to count the number of vowels in a string
function countVowels(str) {
    // define an array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
  
    // loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // check if the character is a vowel
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
  
    // return the number of vowels
    return count;
  }
  
  // test cases
  console.log(countVowels("CodeHelp")); // output: 3
  console.log(countVowels("hello")); // output: 2
  console.log(countVowels("world")); // output: 1
  console.log(countVowels("aeiou")); // output: 5
  console.log(countVowels("JavaScript")); // output: 3
  console.log(countVowels("Pranay")); // output: 2
  /*In this solution, we define an array of vowels and initialize a count variable to 0. We then loop through each character in the string and check if it is a vowel by using the includes() method to check if it exists in the array of vowels. If it is a vowel, we increment the count variable. Finally, we return the count of vowels in the string.
We test the function with different test cases to ensure that it returns the correct output for each case.*/


/* 10.Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
Hint: You may need to use nested loops and conditional statements to solve this problem.*/
function findCommonElements(arr1, arr2) {
    // Create an empty array to hold the common elements
    let commonElements = [];
  
    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
      // Check if the current element is in arr2
      if (arr2.includes(arr1[i])) {
        // If the element is in arr2 and not already in commonElements array, add it
        if (!commonElements.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
      }
    }
  
    // Sort the commonElements array in ascending order
    commonElements.sort((a, b) => a - b);
  
    // Return the commonElements array
    return commonElements;
  }
  
  // Example usage
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  const commonElements = findCommonElements(arr1, arr2);
  console.log(commonElements); // Outputs: [3, 4, 5]
  /*The function findCommonElements takes two arrays arr1 and arr2 as parameters. Inside the function, we first create an empty array called commonElements to hold the common elements between the two arrays.
We then loop through each element in arr1 using a for loop. For each element, we use the includes() method to check if it exists in arr2. If it does, we check if the element is already present in the commonElements array using the includes() method. If it is not already present, we add it to the array using the push() method.
After all elements in arr1 have been checked, we sort the commonElements array in ascending order using the sort() method with a compare function.
Finally, we return the commonElements array.
We then use the function with two example arrays, [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], and output the result to the console using console.log(). The output will be the common elements [3, 4, 5].*/


