let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms shows ${slaStatus}`);  // backtick (`)


// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

/*
Template literals (or template strings) are a modern way to work with strings in JavaScript, introduced in ES6. They provide features like multi-line strings, string interpolation, and embedded expressions, making your code significantly cleaner than traditional single (') or double (") quotes.

1. Basic Syntax

Template literals are enclosed by backtick (`) characters instead of regular quotes.
javascript
const greeting = `Hello World`;


2. String Interpolation (Embedding Variables)

You can inject variables directly into the string using the ${expression} placeholder. This completely replaces messy string concatenation with the + operator.
javascript
const user = 'Alice';
const age = 25;

// Old way (Concatenation)
console.log('My name is ' + user + ' and I am ' + age + ' years old.');

// New way (Template Literal)
console.log(`My name is ${user} and I am ${age} years old.`); 
// Output: My name is Alice and I am 25 years old.
*/