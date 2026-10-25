let scores = [45, 82, 91, 60, 73];
let grades = scores.map(i => i>70 ? "Pass" : "Fail")
console.log(grades);
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// The map method calls the callbackfn function one time for each element in the array.
// the calling function is i>70 will be called and get evaluated for each element i.e. 45, 82, 91, 60, 73 and returns the result Pass or Fail
//map will take item 1 by 1 , it wil apply ternary operator or any function 

//Filter
let passing = scores.filter(s => s > 70); // Returns the elements of an array that meet the condition specified in a callback function.
console.log(passing); //The filter method calls the predicate function one time for each element in the array.

// // Task: Research Array map and filter in Javascript:
// map() and filter() are fundamental JavaScript array methods used to transform and select data without 
// mutating the original array. Both methods are higher-order functions that iterate over an array and 
// accept a callback function as their primary argument.

// 1. The map() Method
// Use map() when you want to modify every item in an array uniformly.
// Syntax:
// const newArray = oldArray.map((element, index, array) => {
//   // Return the transformed element
// });

// • element: The current item being processed.
// • index (Optional): The index of the current item.
// • array (Optional): The original array being iterated.

// Example: Doubling Numbers

// javascript
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]
// console.log(numbers); // [1, 2, 3, 4] (Original is untouched)

// 2. The filter() Method
// Use filter() when you want to strip away unwanted elements based on specific criteria.
// Syntax:
// const newArray = oldArray.filter((element, index, array) => {
//   // Return true to keep the element, false to drop it
// });

// Example: Extracting Even Numbers

// javascript
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // [2, 4, 6]