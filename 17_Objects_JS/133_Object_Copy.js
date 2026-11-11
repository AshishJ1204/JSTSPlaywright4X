let a = { status : "pass" };
console.log(a.status);
let b = a; //Copy the reference of a to b.Now both a and b point to the same object in memory.
b.status = "fail"; //Change the status property of the object through b.
console.log(a.status); // Copy the reference means new object will have same reference as
//  old object. So, if we change the value of new object then it will also change the
// value of old object. So, the output will be "fail" instead of "pass".