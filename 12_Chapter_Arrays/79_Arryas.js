let fruits = [];
console.log(typeof fruits);

let browser = ["chrome", "firefox", "webkit"];
console.log(browser.length);

console.log(browser.at(0)); //arrayname.at(index)
console.log(browser[0]);

console.log(browser[-1]); // not allowed in case of negative values so 'undefined'
console.log(browser.at(-1)); // only allowed way in case of negative values