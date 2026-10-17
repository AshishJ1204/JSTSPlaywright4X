 let amul = null;
 let val = amul ?? "Chitale Milk"; // if amul is null, then val will be assigned to "Chitale Milk"
 console.log(val);


let api_response = null;
let responsedata = api_response ?? "{}"; // if api_response is null, then responsedata will be assigned with RHS value
console.log(responsedata);

let api_response1 = "Ashish";
let responsedata1 = api_response1 ?? "{}"; // if api_response1 is not null, then it will do no change
console.log(responsedata1);

/*
## Nullish Coalescing
This operator makes sure that if the value is null, then the right-hand side value will be assigned. 
 */