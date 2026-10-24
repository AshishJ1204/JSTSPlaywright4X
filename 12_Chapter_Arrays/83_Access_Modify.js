// Access and Modifying

let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]); //pass
console.log(statuses[2]); //skip

console.log(statuses.at(-1)); //skip
console.log(statuses.at(-2)); //fail
console.log(statuses.at(-4)); // undefined

// Modify

statuses[1] = "blocked"; // here we are modifying value at 1 i.e. fail with new value blocked
console.log(statuses);
console.log(statuses.length);