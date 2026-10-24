
let browser = ["chrome", "firefox", "webkit"]; // this is widely used array creation

let scores = new Array(3); // creates [empty x 3], 3 means length here i.e. how many elements you want, new keyword creates a new array //rarely used
scores [0] = 1;

let scores2 = new Array(1, 2, 3);

let numbers= new Array(100, 200, 300, 400); //used

let test = Array.of(10, 20, 30, 40, 50); // can also be created with Array.of(values)//rarely used
console.log(test.length);

// Array.from()
let chars = Array.from("hello"); //rarely used
// ["h", "e", "l", "l", "o"] // this is string to character version 