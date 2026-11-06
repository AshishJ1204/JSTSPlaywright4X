// let is block scoped variable. USE LET instead of VAR as advised.
let b = 20; // Global scope
console.log(b); // 20

function printHello() {
    console.log("Hello Ashish");
    let b = 30; // Local Scope
    console.log(b); // 30
    if (true) {//this is if block & value of b=5 is not accessible outside this block
        let b = 5; // b is local variable here
        console.log(b); // 5
    }
    console.log("let ->", b); // 30

}
    printHello()