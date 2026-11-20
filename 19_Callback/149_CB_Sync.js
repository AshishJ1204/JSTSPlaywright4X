let testResults = ["Pass","Fail","Pass","Skip"];
testResults.forEach(function(testResults, index){
    console.log("Test", index , testResults);
});


// "All done" prints LAST because forEach is synchronous — it finishes all
//  4 iterations first, then moves on.