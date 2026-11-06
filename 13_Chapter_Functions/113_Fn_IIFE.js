//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 


function name1() {  // 1. normal function example
    console.log("Hi")
}
name1(); // Function Call

// 2. Anonymous function - Fn without name.
(function() {
    console.log("Anonymous function")
}) (); // Function Call

// This is an IIFE (Immediately Invoked Function Expression): an anonymous function that 
// runs as soon as JavaScript reaches it. The parentheses around the function make it an 
// expression, and the final () calls it immediately.
// When it runs, console.log() prints Anonymous function. Because the function has
//  no name and is called right away, you don’t need to store it in a variable.

(() => {   // => is replacing the function keyword and is used to define an arrow function.
    console.log("Setup complete");
    }
) (); // 3. Function Call