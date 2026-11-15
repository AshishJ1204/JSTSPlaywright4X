// *****
// ****
// ***
// **
// *

let n = 5; // rows

for (let i = n; i >= 1; i--){ // i we are starting rom reverse i.e. n and reducing i 
    for (let j=1; j <= i ; j++) { // j should be less than i hence consition is j<=i
       process.stdout.write("*");
       
    }
    console.log("") // for this every print will come to next line
}

//This program draws a triangle made of stars. It starts with 5 stars and makes 
// each new row one star shorter:
// Think of the outer loop as choosing each row, and the inner loop as placing
//  the stars in that row.
// let n = 5; sets the starting number of stars.
// i counts down from 5 to 1. Each value of i is the number of stars for that row.
// j counts from 1 up to i, printing one * each time.
// process.stdout.write("*") prints stars side by side without moving to a new line.
// console.log("") moves to the next line after the row is done.