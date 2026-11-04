//Mutiline
const getResult = (score) => { 
    if(score > 70)  return "Pass" ; 
     return "Fail";             // multiline
}
console.log(getResult(78));
console.log(getResult(43));

/*
getResult is an arrow function that takes a score. Because its body contains an if statement and more than one line, it uses braces and explicit return statements.

If the score is greater than 70, the function returns "Pass". Otherwise, it returns "Fail". The two console.log() calls show the results: getResult(78) prints Pass, and getResult(43) prints Fail.
*/