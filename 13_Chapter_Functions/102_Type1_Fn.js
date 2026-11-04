// Type 1 - No param / argument, No Return -> final return undefined.

// Fn Define
function greet() { // here there is no paramaters mentioned
    console.log("Hi Ashish, how are you"); // here there no return keyword used 
    // so no return type
        }
        // Fn calling 
         greet(); // here there is no argument present


         greet();
         greet();
         greet();

function openBrowser(){
    console.log("Open Browser")
}

     openBrowser();

     let msg = greet(); // undefined because return not specified in above function
        console.log(msg);