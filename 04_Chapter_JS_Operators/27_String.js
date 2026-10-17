let s = "Hi, ";
console.log(typeof s); // string
s += "Dev"; // s = s + "Dev" = s = Hi, + Dev = Hi, Dev // string concatenation
console.log(s); // Hi, Dev

console.log("Hello", "Ashish"); // this is normal printing,(Concat of string can also be done with comma
console.log("Hello" + "Ashish"); // Concatenation of string with plus operator, here both strings get joined and printed as one string

console.log(1, 2, 3, 4, "Hello", true); // This is normal printing
console.log(1,2,3,4, "Hello" + true); // trial by me-