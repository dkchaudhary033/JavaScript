// JavaScript Exercise-2
// Topics covered:
// --Functions and scope
// --Arrays and objects

// 1.Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.
// Define a function called greet that takes a name parameter
function greet(name) {
    // Use a console.log statement to output a greeting message with the name parameter
    console.log(`Hello ${name}! How are you doing today?`);
  }
  // Call the greet function and pass in the name "Pranay" as an argument
  greet("Pranay"); // Output: Hello Pranay! How are you doing today?
  
  /*Explanation:
- The `greet` function is defined using the `function` keyword and takes a single parameter called `name`.
- The body of the function contains a `console.log()` statement that outputs a greeting message with the `name` parameter interpolated using string template literals.
- We then call the `greet()` function with the argument "John", which causes the function to be executed and the greeting message to be logged to the console.

Note:

- String template literals are a newer feature in JavaScript that allow you to embed expressions inside string literals, making it easier to create complex strings that include variables, functions, and other dynamic content.
- The use of backticks (`) is required to indicate that a string is a template literal.*/



// 2.Write a function called 'getSquare' that takes a number parameter and returns its square.
// Define a function called getSquare that takes a number parameter
function getSquare(number) {
    // Use the exponent operator (**) to square the number parameter
    const square = number ** 2;
  
    // Return the square value to the calling code
    return square;
  }
  
  // Call the getSquare function and pass in the number 5 as an argument
  const result = getSquare(5);
  
  // Log the result to the console
  console.log(result); // Output: 25
  /* Explanation:
- The `getSquare` function is defined using the `function` keyword and takes a single parameter called `number`.
- The body of the function calculates the square of the `number` parameter using the exponent operator (`*`) and assigns it to a constant variable called `square`.
- Finally, the function returns the `square` value to the calling code using the `return` keyword.
- We then call the `getSquare()` function with the argument `5`, which causes the function to be executed and the square of `5` to be returned and stored in the `result` variable.
- Finally, we log the `result` value to the console using `console.log()`.

Note:

- The exponent operator (`*`) is a newer feature in JavaScript that allows you to raise a number to a power. It is equivalent to using the `Math.pow()` method with a base and exponent. */


// 3.Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.
function countLetters(str) {
    // Create an empty object to store the letter counts
    const counts = {};
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check if the character is already in the counts object
      if (counts[char]) {
        // If it is, increment the count by 1
        counts[char]++;
      } else {
        // If it's not, add it to the object with a count of 1
        counts[char] = 1;
      }
    }
  
    // Return the counts object
    return counts;
  }
  
  // Example usage:
  const letterCounts = countLetters("WebDevelopment");

  console.log(letterCounts); // Output: { W: 1, e: 4, b: 1, D: 1, v: 1, l: 1, o: 1, p: 1, m: 1, n: 1, t: 1 }
/* Explanation:

- The `countLetters` function takes a `str` parameter representing the string to count the letters in.
- It initializes an empty object called `counts` to store the letter counts.
- The function then loops through each character in the string using a `for` loop. For each character:
    - It checks if the character is already in the `counts` object using an `if` statement.
    - If the character is already in the `counts` object, it increments the count for that character by 1.
    - If the character is not yet in the `counts` object, it adds it to the object with a count of 1.
- After the loop is finished, the function returns the `counts` object containing the letter counts.

Note:

- This function is case-sensitive, meaning it will count uppercase and lowercase letters separately.
- This function will also count any non-letter characters in the string, such as spaces or punctuation marks. */



// 4.Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.
function createCounter() {
    let count = 0; // initialize count to 0
  
    // define and return a function that increments count and returns its value
    return function () {
      count++; // increment count by 1
      return count; // return the new value of count
    };
  }
  
  // create a new counter function
  const counter = createCounter();
  
  // call the counter function multiple times and log the result
  console.log(counter()); // prints 1
  console.log(counter()); // prints 2
  console.log(counter()); // prints 3
/* Explanation:

- The `createCounter` function creates a closure where `count` is a private variable that cannot be accessed from outside the function.
- The function returns an inner function that can access `count` due to the closure.
- The inner function increments `count` by 1 each time it is called and returns its new value.
- The `counter` variable is assigned the returned inner function from `createCounter`.
- Each time `counter` is called, it increments and returns the current value of `count`.

Note:

- Closures are an important concept in JavaScript, and this example demonstrates their use. */



// 5.Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.
function sumEvenNumbers(numbers) {
    let sum = 0; // initialize sum to 0
  
    // loop through each number in the array
    for (let i = 0; i < numbers.length; i++) {
      // check if the current number is even
      if (numbers[i] % 2 === 0) {
        sum += numbers[i]; // add the current number to sum
      }
    }
  
    return sum; // return the final sum of even numbers
  }
  
  // test the function with an example array
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(sumEvenNumbers(numbers)); // prints 12
/* Explanation:

- The `sumEvenNumbers` function takes an array of numbers as a parameter.
- It initializes a variable `sum` to 0 to store the running total of even numbers.
- It loops through each number in the array using a `for` loop.
- For each number, it checks if it's even by checking if the remainder of dividing it by 2 is 0 using the modulo operator.
- If the number is even, it adds it to the running `sum`.
- After all numbers have been checked, the function returns the final `sum` of even numbers.

Note:

- This function only sums even numbers in the array, and ignores odd numbers. */



// 6.Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// Function to calculate the sum of all numbers in an array
function sumArrayNumbers(arr) {
    let sum = 0; // Initialize sum variable to zero
    for (let i = 0; i < arr.length; i++) {
      // Loop through the array
      sum += arr[i]; // Add each number to sum
    }
    return sum; // Return the final sum
  }
  
  // Test cases
  const numbers1 = [1, 2, 3, 4, 5];
  console.log(sumArrayNumbers(numbers1)); // Output: 15
  
  const numbers2 = [10, 20, 30];
  console.log(sumArrayNumbers(numbers2)); // Output: 60
  
  const numbers3 = [-1, 2, -3, 4, -5];
  console.log(sumArrayNumbers(numbers3)); // Output: -3
/* Explanation:

- The function `sumArrayNumbers` takes an array of numbers as an argument.
- The variable `sum` is initialized to zero to keep track of the sum of the numbers in the array.
- The for loop iterates through the array and adds each number to the `sum` variable.
- After iterating through the entire array, the function returns the final sum.
- Three test cases are included to verify that the function works as expected. */



// 7.Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.
function filterLongStrings(arr) {
    // create an empty array to store the filtered strings
    let filteredArr = [];
  
    // loop through each string in the original array
    for (let i = 0; i < arr.length; i++) {
      // check if the string's length is greater than 5
      if (arr[i].length > 5) {
        // if it is, push the string to the filtered array
        filteredArr.push(arr[i]);
      }
    }
  
    // return the filtered array
    return filteredArr;
  }
  
  // Test cases
  console.log(filterLongStrings(["apple", "banana", "kiwi", "watermelon", "orange"])); // ['watermelon', 'orange']
  console.log(filterLongStrings(["cat", "dog", "elephant", "giraffe"])); // ['elephant', 'giraffe']
  console.log(filterLongStrings(["car", "bike", "bus", "train"])); // []
  
  console.log(filterLongStrings(["123456", "123", "123456789"])); // ["123456", "123456789"]
  
  console.log(filterLongStrings([])); // []
  /*Explanation:

- The function `filterStrings` takes an array of strings as an argument.
- Inside the function, we initialize an empty array `filteredArray` to store the filtered strings.
- We then iterate over the input array using a `for` loop and check if the length of the string at the current index is greater than 5.
- If the length is greater than 5, we add that string to the `filteredArray`.
- Finally, we return the `filteredArray`.

Note: This function can be written using higher-order functions like `filter` as well.*/



// 8.Write a function that takes an object and returns an array of all the keys in the object.
function getKeys(obj) {
    // Using Object.keys() method to get all the keys in the object
    const keys = Object.keys(obj);
  
    return keys;
  }
  
  // Test cases
  const person = {
    name: "John",
    age: 30,
    gender: "male",
    city: "New York",
  };
  
  console.log(getKeys(person)); // ["name", "age", "gender", "city"]
  console.log(getKeys({})); // []
  /* Explanation:

- The `getKeys` function takes an object as an argument.
- We use the `Object.keys()` method to get all the keys in the object.
- The keys are returned as an array.
- The function returns the array of keys.

Note: This function only returns the keys of the object, not the values associated with those keys. */


// 9.Write a function that takes an array of objects and returns an array of all the values of a specified property name.
function getPropertyValues(arr, propName) {
    // Using Array.map() method to get the values of the specified property
    const values = arr.map((obj) => obj[propName]);
  
    return values;
  }
  
  // Test cases
  const people = [
    { name: "Pranay", age: 20, gender: "male" },
    { name: "Nidhi", age: 21, gender: "female" },
    { name: "Soumya", age: 21, gender: "male" },
  ];
  
  console.log(getPropertyValues(people, "name")); // ["Pranay", "Nidhi", "Soumya"]
  console.log(getPropertyValues(people, "age")); //  [20, 21, 21]
  console.log(getPropertyValues(people, "gender")); // ["male", "female", "male"]
  console.log(getPropertyValues(people, "address")); // [undefined, undefined, undefined]
  /* Explanation:

- The `getPropertyValues` function takes an array of objects and a property name as arguments.
- We use the `Array.map()` method to iterate over the array and create a new array containing only the values of the specified property.
- The values are returned as an array.
- The function returns the array of property values.

Note: If the specified property does not exist in any of the objects, the returned array will contain `undefined` values for those objects. */



// 10.Write a function that takes an array of objects and returns the object with the highest value for a specified property name.
function findMaxByProperty(arr, prop) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }
  
    // Initialize maxObj to first object in the array
    let maxObj = arr[0];
  
    // Loop through the array starting at second object
    for (let i = 1; i < arr.length; i++) {
      // Check if the current object's property value is greater than maxObj's property value
      if (arr[i][prop] > maxObj[prop]) {
        // If yes, update maxObj to current object
        maxObj = arr[i];
      }
    }
  
    // Return the object with highest value for the specified property
    return maxObj;
  }
  
  // Test case 1
  const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ];
  const maxObj1 = findMaxByProperty(arr1, "price");
  console.log(maxObj1); // { name: 'orange', price: 3 }
  
  // Test case 2
  const arr2 = [
    { name: "Pranay", age: 20 },
    { name: "Nidhi", age: 21 },
    { name: "Soumya", age: 21 },
  ];
  const maxObj2 = findMaxByProperty(arr2, "age");
  console.log(maxObj2); // { name: 'Nidhi', age: 21 }
  
  // Test case 3
  const arr3 = [];
  const maxObj3 = findMaxByProperty(arr3, "price");
  console.log(maxObj3); // null
  /* Explanation:

- The function takes two parameters: `arr` (array of objects) and `prop` (string property name).
- We check if the length of the array is 0, then we return `null`.
- We initialize `maxObj` variable to the first object in the array.
- We iterate over the array starting from the second object (i=1).
- For each object in the array, we compare its `prop` value to the `prop` value of `maxObj`.
- If the `prop` value is greater, we update `maxObj` to the current object.
- We return `maxObj`.

Note:

- The function assumes that all objects in the array have the specified property name. If some objects don't have the property, the function will throw an error. Therefore, it's a good practice to add some error handling to the function if needed. */


