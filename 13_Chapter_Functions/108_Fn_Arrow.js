function greet(name) {
    return `Hello, ${name}`;
}

 let greet1 = function(name) {  // anonymous function - Fn without name.
    return `Hello, ${name}`;
 }
 // Arrow fn
 let greet2 = (name2) => `Hello, ${name2}`;
 // If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces,
//  and use the => arrow operator between the parameter and the function body.