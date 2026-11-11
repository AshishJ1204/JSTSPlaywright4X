const user = {
    name : "John",
    age : 30,
    email : "john@example.com"
}

console.log(user); // { name: 'John', age: 30, email: 'john@example.com' }

// Accessing properties
console.log(user.name);
console.log(user["age"]);
console.log(user.age); // easy way to write

let a = user.name;
console.log(a); // one more way tried by own and it is working

// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user); // prints with added (city) & modified (age) properties