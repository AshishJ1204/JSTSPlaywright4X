
let browser = ["chrome", "firefox", "safari", "opera", "edge"];
console.log(browser);
console.log(browser.length);

browser.pop();
console.log(browser);
console.log(browser.length);

let removed = browser.shift(); // we are using shift so 1st element i.e. chrome will get removed
console.log(browser);
console.log(browser.length);

//arr.unshift(chrome); // we are using unshift so chrome will get added at 1st place
// fyi current value is [ 'firefox', 'safari', 'opera' ]
for (i=0; i<browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === 'opera') {
        console.log("opera doesn't support Automation Now!");
    }
}
