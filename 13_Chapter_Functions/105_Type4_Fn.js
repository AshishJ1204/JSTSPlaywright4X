// Function type 4 - with argument & with return type
// 90% of times we will use type 3 and type 4 functions

function sumOfTwoNumbers(a,b) { // here we have stated parameters
    return a+b;    // 4+5=9
}
    // sumOfTwoNumbers(4,5); - one more way is we can write this and then assign it to below 
    // variable and declare it as below without arguments inside it
    let c = sumOfTwoNumbers(4,5);//here we are doing 1.variable declaration i.e. assigning c
    //  with this function 2. along with argument passing as well
    console.log(c); // 9 will get stored in c and printed
    console.log(sumOfTwoNumbers(4,5));