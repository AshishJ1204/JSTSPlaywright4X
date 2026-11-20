function calculate (a, b, operation) {
    return operation (a, b);
}
let sum = calculate(10, 5, function (x, y) { // function keyword but no name so its
// an anonymous function
    return x + y; // returns addition of 10 & 5
});
    
    console.log(sum);

// The calculate function accepts two numbers and an operation callback. It invokes
// the callback with a and b, then immediately returns the callback’s result:
// return operation(a, b);
// The call passes 10 as a, 5 as b, and an anonymous function as operation. 
// This function receives x = 10 and y = 5, returns their sum, and returns 15. 
// Therefore, calculate(10, 5, ...) evaluates to 15, which is stored in sum.
// Finally, console.log(sum) prints 15 to the console.

