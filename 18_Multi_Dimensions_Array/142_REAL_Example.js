let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for(let i=0;i< testMatrix.length;i++){ // testMatrix.length is 3 because it has 3 rows.
    for(let j=0;j< testMatrix[i].length;j++){ // testMatrix[i].length is 3 e.g. if i is 0
        // then elements here are "login", "pass" and 200 so 3 elements
        process.stdout.write(testMatrix[i][j]+" ");
    }
    console.log("");
}

console.log(" --------- ");

// testMatrix is an array containing three smaller arrays. Each inner array represents 
// one test result: the test name, its status, and a number such as a response time or status
// code. For example, the first row contains "login", "pass", and 200.
// The outer for loop visits each row in testMatrix. For every row, the inner for loop
// visits each value in that row. The indexes i and j start at 0, because 
// JavaScript arrays count from zero.
// process.stdout.write(...) prints each value followed by a space without moving to
//  a new line. After the inner loop finishes a row, console.log("") moves the output to
//  the next line. Finally, the last console.log prints a separator line.
// testMatrix[i] is the row selected by the outer loop, and .length tells us how many 
// items that row has. Since JavaScript indexes start at 0, a row with 3 items has 
// indexes 0, 1, and 2. The loop stops when j reaches 3, so it doesn’t try to read 
// past the end of the row.
// Using the current row’s length also works if different rows have different numbers of items.
// The output looks like this:
// login pass 200
// checkout fail 404
// search pass 180
//  ---------