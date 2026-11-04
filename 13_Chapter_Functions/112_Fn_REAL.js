function validateStatusCode(status) {   // usual way of writing function with parameter and no return type
    if (status >= 200 && status <= 300) {
        console.log("Request is fine !");
    }
}
    const validateStatusCode_Exp = function(status) { // function expression - anonymous function with parameter and no return type
        if(status >= 200 && status <= 300) {
            console.log("Request is fine !");
    
    }
}
    const validateStatusCode_ArrowFunc = (status) => { //Arrow function
        if(status >= 200 && status <= 300) { // more used in real time as it needs less code hence less tokens
        console.log("Request is fine !");
        }
    }

    validateStatusCode(200);
    validateStatusCode_Exp(200);
    validateStatusCode_ArrowFunc(200);
