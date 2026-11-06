// This program is not that much understood
function add(a,b,c) {
    return a+b+c;
}

 let num = [1,2,3,4,5];
 console.log(add(...num)); // here we are using spread operator to pass the array elements as arguments to the function

 // ------

 function hasError(...codes) {
    return codes.some(codes => codes >= 400);
 }

 let responseCodes = [200, 201, 404];
 let responseCodes2 = [200, 201, 404, 500];
 
hasError(...responseCodes);

 // console.log(hasError(...responseCodes)); // here we are using spread operator to pass the array elements as arguments to the function

//  console.log(hasError(...responseCodes2)); // here we are using spread operator to pass the array elements as arguments to the function
