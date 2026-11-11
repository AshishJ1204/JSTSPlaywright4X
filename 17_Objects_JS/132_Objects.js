let a1 = { name : "Ashish"};
console.log(a1.name);
// let declares a variable named a1. It is assigned an object with one key/property: name,
//  whose value is the string "Ashish". You can access that value using a1.name. Because
//  a1 is declared with let, the variable can later be reassigned to a different value.
let a = { status : "pass" };
console.log(a.status); // one way to access the value of the status property is using
// dot notation, as in a.status.
console.log(a["status"]); // Mostly used: another way to access the value of the
// status property is using bracket notation, as in a["status"].


// keys i.e. property is case sensitive
let a22 = { status : "pass" , Status : "fail"};
console.log(a22["status"]);
console.log(a22["Status"]);