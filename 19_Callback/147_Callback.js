function placeOrder(item, callback) { // callback is name of function
    console.log("Placing an order");
    console.log("Order placed", item);
    callback(); // when we are done we will call the function in line 1
}


// First Way
function completeOrderPrint() { //we hv written here actual callback function of above
    console.log("Normal fn"); // callback function in normal way
}
placeOrder("Burger" , completeOrderPrint); // here we are using function name i.e.
// completeOrderPrint

// Second Way Anonymous
placeOrder("Burger" , function() { // here instead of function name, function is defined.
    console.log("Your order is ready, please pick up the order"); 
}); // callback function is starting from function() to });

// Third way - Arrow function
placeOrder("Burger" , () => {//here we hv replaced function with =>i.e. arrow function
    console.log("Arrow Fn, I am also a function without name! ")
});

// can refer for below example https://playwright.dev/docs/writing-tests > First test

test('has title', async ({ page }) => {

});


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });

// Program explain as below:
// The `placeOrder` function takes an `item` and a `callback`. It logs that the order 
// is being placed, then that the item has been ordered, and finally calls `callback()`. 
// Calling the callback runs the function that was passed in.
// In the first example, `completeOrderPrint` is defined separately and passed 
// to `placeOrder` by its name. It is passed without parentheses, so the function
//  itself is supplied rather than run immediately. When `placeOrder` reaches
//   `callback()`, `completeOrderPrint` runs and prints `"Normal fn"`.
// In the second example, the callback is an anonymous function defined directly in 
// the call to `placeOrder`. It prints that the order is ready. In the third example,
//  an arrow function is used for the same purpose, printing its own message. 
//  These are three ways to provide a callback; each callback runs when `placeOrder` 
//  calls it.