function getUserStatus() {
   // var statusCode is hoisted to the top of the function scope
   // and initialized with undefined
    console.log(status_Code); // undefined
    var status_Code = "200";
    console.log(status_Code);

}
    getUserStatus();