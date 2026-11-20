let apiCall = new Promise(function(resolve, reject) {
    resolve({status : 200, body : "User Data"}); // calling a resolve function
});

// below instead of callback function we are using then here which means when 
// this is done call the function response & we will get the response automatically
apiCall.then(function(response) { // then means resolve in this case, here resolve
// parameter from above will get applicable here in below print statement
 console.log(response);
}) 

let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");
});

testRun.then(function (data) { // Resolve
    console.log(data);
}).catch(function (error) { // Reject
    console.log(error);
}); // web form and webpage are async in nature hence they will not do all activities 
// same time but some activities will be done later

// Program explain:
// A Promise represents a value that will become available asynchronously. apiCall
// is created with an executor function that receives resolve and reject functions.
//  Since resolve(...) is called, the Promise is fulfilled and the 
//  object {status: 200, body: "User Data"} becomes its result.
// The then() method registers code to run when the Promise succeeds. Its response 
// parameter receives the value passed to resolve, so console.log(response) prints 
// the status and body object.

// The second Promise, testRun, calls reject("Assertion Failed"), so it enters the
// rejected state. The then() handler handles success and will not run in this case.
// Instead, catch() receives "Assertion Failed" as error and prints it.
// Using then and catch avoids manually passing callbacks and provides separate
// handlers for success and failure. This pattern is useful for asynchronous activities 
// such as web forms or pages, where operations may finish later rather than all at once.
