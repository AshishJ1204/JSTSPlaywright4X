let scores = [
    [85, 90, 78],   // student 0 , 253 is total of all values in this row
    [60, 45, 70],   // student 1,  175 same as above
    [95, 88, 92]    // student 2, 275  same as above
];

// Matrix -> Row = Col -> 
let rowsSum = scores.map(row => row.reduce((a,b) => a+b));
console.log(rowsSum);
// By Explain
// scores is a two-dimensional array: each inner array holds the scores for one student. 
// For example, the first student’s scores are 85, 90, and 78.
// scores.map(...) goes through each student’s row and builds a new array from the result.
// For each row, row.reduce((a, b) => a + b) adds its numbers together. Here, a is the 
// running total and b is the next score. So the three totals are 253, 175, and 275.
// Finally, console.log(rowsSum) prints the new array:
// Task completed:
// Explained the selected code in paragraphs, describing the nested scores array, map and 
// reduce behavior, and the resulting totals.

// by ELI5
// Imagine each student has a little score card with three numbers. scores is a stack of 
// all the students’ score cards.
// The program visits each card and adds its numbers together. reduce is the little 
// adding helper: it keeps a running total as it adds each score. map does this once 
// for every student and collects the totals into a new list called rowsSum.
// So the totals are 253, 175, and 275. console.log(rowsSum) shows: