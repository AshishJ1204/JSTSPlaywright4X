// Function 3 - with parameter/ argument but No return type
// 90% of times we will use type 3 and type 4 functions

function greetByName(name) { // name is parameter
        console.log("Hi", name); // Code which you want to execute
                                 // return type not given
    }
    greetByName("Ashish"); // Function Call statements, passing argument i.e. e.g Ashish
    greetByName("Ravi");  // here Function Call will work as usual 
    greetByName("Vaibhav");//when function is called here it goes to function executes the code
    // inside the defined function i.e. console.log("Hi", name) and it will get typed
    greetByName("Dheeraj");

    let name1 = greetByName("Sumit") // absence of return type will matter here
    // when you assign function calling to a variable like this
    console.log(name1); // value of name1 is undefined bcoz there is no return