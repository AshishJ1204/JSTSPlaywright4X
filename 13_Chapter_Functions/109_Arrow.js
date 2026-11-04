function greet(name) {
    return `Hello, ${name}`;
}

const greet2 = (name) => `Hello, ${name}`;
console.log(greet2("Ashish"));

// greet is a regular function that takes a name and returns a greeting. In this example, it is defined but not called.

// greet2 is an arrow function that does the same thing. Because its body is a single expression, JavaScript returns the result automatically—no return keyword or braces are needed.

// console.log(greet2("Ashish")) calls greet2 with "Ashish" and prints Hello, Ashish.