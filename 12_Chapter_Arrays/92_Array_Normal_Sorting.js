let nums = [10,1,21,2];
nums.sort((a,b) => a-b);
console.log(nums);

nums.sort((a,b) => b-a);
console.log(nums);

// Sorts an array in place. This method mutates the array and returns a reference to the same array.
// compareFn
// Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.

let fruits = ["banana", "apple", "cherry"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);

// arrow Functions