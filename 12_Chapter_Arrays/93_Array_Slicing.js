let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically 
// take from start to end.
// slice only moves forward i.e. from left to right only

console.log(arr);
console.log(arr.slice(1,3)); // 1st index element 2 & when 2nd element i.e. end element is given then for 2nd element end-1 = 3-1=2 i.e. index 2
// now 2nd index value is element 3 so arr becomes arr = [2,3]
console.log(arr); // [ 2, 3 ]

// our current array is [ 1, 2, 3, 4, 5 ]
console.log(arr.slice(2)); // our syntax is slice(start, end) so here start is given as index 2 i.e. element 3 and end is not given
// so it will take all the values from element 3 to 5. (5 is end element) i.e. [ 3, 4, 5 ]

console.log(arr.slice(-2)); // so here start is -2 means element 4 and indexation moves from left to right so 4 and 5 [ 4, 5 ]
console.log(arr.slice(-3)); // on similar lines of above

console.log(arr.slice(0)); //so here start is given as index 0 i.e. element 1 and end is not given.
// so it will take all the values from element 1 to 5. (5 is end element)  [ 1, 2, 3, 4, 5 ]

console.log(arr.slice(-5)); //so here start is given as index -5 i.e. element 1 and end is not given.
// so it will take all the values from element 1 to 5. (5 is end element)  [ 1, 2, 3, 4, 5 ]

console.log(arr.slice(-3, -5)); // // slice only moves forward i.e. from left to right only here the 
// movement is from right to left so result array will be empty.