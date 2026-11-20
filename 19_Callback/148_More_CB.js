function test(item, callMeWhenDone) { //JS allows us to pass a function as an argument
    console.log("Hi start the Testcase", item);
    callMeWhenDone; // here is the function but here it is not calling back 
    // as () is not stated
}

test("Verify the login page is working", async (page) =>{});

// The test function accepts two parameters: item, which describes the test, and
//  callMeWhenDone, which is intended to be a callback function. It logs a start 
//  message along with the test description.
// The line callMeWhenDone; only refers to the callback; it does not call it.
//  To invoke the callback, use callMeWhenDone()—and if it needs the page argument, 
//  pass it in, for example callMeWhenDone(page). In the final line, 
//  an async arrow function is passed as the callback, but its body is empty, 
//  so it currently does nothing.