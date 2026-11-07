// INTERVIEW QUESTION

// console.log(greeting);
let greeting = "Hello"; // Error
console.log(greeting);
// gives an error 'ReferenceError: Cannot access 'greeting' before initialization'
// because let and const are hoisted but not initialized. So, we cannot access
// them before initialization. This is called Temporal Dead Zone (TDZ).