let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
            // ternary within ternary within ternary 



console.log(`Status ${statusCode}: ${category}`);