// MOSTLIKELY INTERVIEW QUESTION

// Primitive data type - call by value
// Primitive data type - number, string, boolean, null, undefined

let a = 10;
let b = a;  // it creates a copy
b = 99; // this changes value of b to 99
console.log(a);
console.log(b);
// a is initialized to the number 10. Since numbers are primitive values in JavaScript,
// let b = a copies the value 10 into b; it does not make b refer to a.
// Then b = 99 changes only b. So the first console.log prints 10, and the second prints 99.

console.log("----------")

// Objects — the reference value is copied, so both variables point to the same object.
// Reference - object, array, function
// JavaScript passes the object reference by value, so both variables point to the same object.

let obj1 = { val : 10 };
console.log(obj1); // { val: 10 }
let obj2 = obj1;
console.log(obj2); // { val: 10 }
obj2.val = 99;
console.log(obj2); // { val: 99 }
console.log(obj1.val);

// Explanation:
// obj1 refers to an object whose val property is 10. Assigning obj1 to obj2 copies the
// reference, not the object itself, so both variables refer to the same object. The first
// two logs show that object with val: 10.

// When obj2.val is changed to 99, it updates the shared object. Therefore, the next
//  log shows { val: 99 }, and console.log(obj1.val) also prints 99.