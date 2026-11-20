console.log("Test 1: Started");

setTimeout(function(){  // async means not in sequence
    console.log("Test 2: Started");
}, 5000); // this will come in action after 5 seconds

console.log("Test 3: Started");