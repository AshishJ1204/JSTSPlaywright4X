function doubleMe(a){
    return a*2;
} 

const doubleMeArrow = (a) => a*2 ;  // brackets around a are optional

doubleMe(2);
doubleMeArrow(2);

console.log(doubleMe(2));
console.log(doubleMeArrow(2));

// doubleMe is a regular function that takes a value called a, multiplies it by 2, and returns the result. For example, doubleMe(2) returns 4.

// doubleMeArrow is an arrow function that does the same thing. Since it has one parameter, the parentheses around a are optional, so (a) => a * 2 could also be written as a => a * 2.

// The last two lines call both functions with 2, but don’t display their results. To see the results, wrap the calls in console.log(), such as console.log(doubleMe(2)).