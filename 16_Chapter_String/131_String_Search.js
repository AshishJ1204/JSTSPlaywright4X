// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes() method checks if a string contains a substring and returns true or false
url.includes('staging'); // true
console.log(url.includes('staging')); // true
url.includes('production'); // false
console.log(url.includes('production')); // false

// startsWith() / endsWith() methods check if a string starts or ends with a 
// substring and returns true or false

url.startsWith('https'); // true
console.log(url.startsWith("https")); // true
url.startsWith('http:'); // false
console.log(url.startsWith("http://")); // false
url.endsWith('true'); // true
console.log(url.endsWith(true)); // true

// indexOf / lastIndexOf() methods return the index of the first or last occurrence 
// of a substring in a string. If the substring is not found, it returns -1.

console.log(url.indexOf("a")); // 10
console.log(url.lastIndexOf("a")); // 24
console.log(url.indexOf("nothere")); // -1

// ASCII -> A -> 65
