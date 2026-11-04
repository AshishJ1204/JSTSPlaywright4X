// Function as Expression
function greet(name) {
    return `Hello, ${name}`;
}
// Anonymous Fn - Fn without name.
 let greet1 = function(name) { // here we are creating a anonymous function with 
 // name as parameterand that value will move to left side let or const i.e. 
 // greet1 this is also called function as a expression
    return `Hello, ${name}`;

 }

 console.log(greet("Ashish"));
 console.log(greet1("Ashish"));

 /* greet is a function declaration: it defines a function named greet 
 that accepts a name parameter and returns a greeting. The template literal 
 inserts the parameter’s value into the returned string, so calling greet("Ashish") returns "Hello, Ashish".

greet1 is assigned an anonymous function expression. The function itself has no 
name; the variable greet1 holds a reference to it. The function is not moved to
 the left side—the assignment connects the function value to greet1. 
 Calling greet1("Ashish") also returns "Hello, Ashish".

Both calls print the same greeting, but the functions are defined using different
 syntax: a declaration for greet and an expression assigned to a variable for 
 greet1.
 */
