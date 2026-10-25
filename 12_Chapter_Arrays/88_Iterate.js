let tests = ["login", "checkout", "search"];

for ( let i=0; i<tests.length; i++) { // 1st Mostly this for loop syntax will be used which is easy one
        console.log(i, tests[i]);
}
    console.log(" --------------------------- ");

    // for...of (cleanest of values)

    for (let test of tests) {  // 2nd next to above used syntax will be this.
        console.log(test)  // value
    }
        console.log(" ------ ");

        console.log( " -------forEach Below -----------------");

// forEach (no return value)
tests.forEach((test, index) => {  // 3rd next to above used syntax will be this.

    console.log(`${index}: ${test}`);
});

console.log( " ------------------------");


// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}


let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}


// Arrow functions eliminate the need for the function keyword.
// javascript
// // Traditional Function Expression
// const add = function(a, b) {
//   return a + b;
// };

// // Arrow Function
// const add = (a, b) => {
//   return a + b;
// };