// V Imp as interview Q.
let original = [1, 2, 3];
let copy1 = [...original]; // this the way a array can be copied
console.log(original); 
console.log(copy1); //[ 1, 2, 3 ]


let copy2 = original.slice(); // slice(start, end) — creates a new array, 
// here start and end is not given so it will take entire array from start to end.
// so whenever you use slice or spread a new array is created
copy2.push(92);
copy1.push(93);
console.log(original);
console.log(copy1);
console.log(copy2); //[ 1, 2, 3 ]

// Deep copy
let deep_copy_array = original; 
// Deep copy
// when you directly assign a original array to some array that array becomes deepcopy array
// deepcopy array will also change the original array

deep_copy_array.push(91);

console.log(original); // Array is mutable, if you assign original array to copy 2 and then add 
// element 91 then it will reflect in original array also.
console.log(deep_copy_array);