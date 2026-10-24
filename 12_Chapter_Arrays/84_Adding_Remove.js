let arr = [1, 2, 3];
console.log(arr);
console.log(arr.length);

// Add to the END

arr.push(4); // push adds to the END, syntax is arrayname.push(element)
console.log(arr);
console.log(arr.length);

arr.pop(); // pop removes the element at END, syntax is arrayname.pop
console.log(arr);
console.log(arr.length);

arr.push(5,6);
console.log(arr);
console.log(arr.length);

arr.unshift(0); // Inserts new element at the start of an array
console.log(arr);
console.log(arr.length);

//shift to Remove from beginning
arr.shift();
console.log(arr);
console.log(arr.length);
// Push and pop are used when adding and removing at the end of array
// unshift and shift is used when adding and removing at the end of array

arr.splice(2,1); // 2-> start from index 2, 1-> delete 1 element/number from that position
console.log(arr);
console.log(arr.length);

arr.splice(2,0,99); //2-> start from index 2, 0> delete 0 i.e. none element at that index, 
// 99> insert 99 in that array at that 2nd index
console.log(arr);
console.log(arr.length);

arr.splice(2,1,98); // here it will replace the element at 2nd index i.e. 99 with 98
console.log(arr);
console.log(arr.length);

arr.splice(2,2,99); // here it will replace the element at 2nd index i.e. 99 with 98
console.log(arr);
console.log(arr.length);

arr.splice(2,2,99); 
console.log(arr);
console.log(arr.length);

arr.push(6);
console.log(arr);
console.log(arr.length);

arr.push(6);
console.log(arr);
console.log(arr.length);

arr.splice(3,0,5);
console.log(arr);
console.log(arr.length);

arr.pop();
console.log(arr);
console.log(arr.length);

// existing array is [ 1, 2, 99, 5, 6 ]
arr.splice(1,2,10,20); // here 1 > is at which index operation needs to be done,
// 2> count of elements to be removed/replaced, 10,20 are the elements to be placed there
console.log(arr);
console.log(arr.length);