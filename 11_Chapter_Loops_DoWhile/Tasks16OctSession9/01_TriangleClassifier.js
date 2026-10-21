// let a = 5; // this is working program but getting mismatch in output in coding practice platform
// let b = 5;
// let c = 5;

// if (a === b && a === c) {
//     console.log("Equilateral");
// }
// else if (a !== b && b !== c && c!== a ) {
//     console.log("Scalene");
// }
// else {
//     console.log("Isosceles");
// }

// Below is code used in Coding Practice: Triangle Classifier
// Note: Equilateral is working but Isosceles and Scalene input matching with Result but expected output is showing different starangely
// const [a,b,c] = require('fs').readFileSync(0, 'utf8');


if (a === b && a === c) {
    console.log("Equilateral");
}
else if (a !== b && b !== c && c!== a ) {
    console.log("Scalene");
}
else if ( a === b || b === c || c=== a) {
    console.log("Isosceles");
}


// below being used in coding practice
// const a = require('fs').readFileSync(0, 'utf8');
// const b = require('fs').readFileSync(0, 'utf8');
// const c = require('fs').readFileSync(0, 'utf8');
// // Write your solution here
// if (a === b && a === c) {
//     console.log("Equilateral");
// }
// else if (a !== b && b !== c && c !== a) {
//     console.log("Scalene");
// }
// else {
//     console.log("Isosceles");
// }