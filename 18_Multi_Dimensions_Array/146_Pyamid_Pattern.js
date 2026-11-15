//   *
//  ***
// *****

let n = 3;

for(let i=1;i<=n;i++){
        let row = "";
        for(let j=1;j<=n-i;j++){
               row += " ";
        }
        for(let j=1;j<=2*i-1;j++){
            row = row + "*";
        }
        console.log(row);
}

// ELI5 in VS code
// This program builds a little star pyramid, one row at a time:
// Think of each row as a line of building blocks: first it adds spaces to move the stars
// toward the middle, then it adds stars.
// n = 3 means the pyramid has 3 rows.
// The outer loop (i) chooses the row: 1, then 2, then 3.
// let row = "" starts that row as an empty line.
// The first inner loop adds spaces. Higher rows need more spaces to appear centered.
// The second inner loop adds stars: 1 star on row 1, 3 on row 2, and 5 on row 3.
// console.log(row) prints the finished row and moves to the next line.
// So each row gets one fewer space and two more stars than the row above it.