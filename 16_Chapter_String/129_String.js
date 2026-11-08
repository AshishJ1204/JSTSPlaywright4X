let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`; // if we do not use $ then it will
//become normal string and will not evaluate the expression inside ${}
console.log(message);


// single quotes
let a = 'hello';
console.log(a);

// double quotes
let b = "world";
console.log(b);

// Template literals (backticks)- allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2+2 = ${2+2}`;
console.log(msg);

// Multiline string can be craeted using backtick
let report = ` 
Test: Login
Status: Pass
Duration: 320 ms
`;
console.log(report);

console.log(String(200));
String(true); //  "true"
String(null); // "null"
String([1, 2]); // "[1,2]"