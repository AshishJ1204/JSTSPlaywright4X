let nums = [10, 25, 30, 45];
let results = nums.find(temp => temp > 20);
console.log(results);

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);

let Lastnum = nums.findLast(n => n > 20); // finds last element i.e. 45
console.log(Lastnum);
let Lastindex = nums.findLastIndex(n => n > 20); // finds last index i.e. 3
console.log(Lastindex);