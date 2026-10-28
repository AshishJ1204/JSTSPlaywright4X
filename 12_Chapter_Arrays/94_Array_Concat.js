let a = [1,2];
let b = [3,4];
let c = a.concat(b); // concatenation of Arrays

console.log(c);

// spread (modern way) - concatenation. (...) ...a means all values of array a
let d = [...a,...b];
console.log("Array d is", d);