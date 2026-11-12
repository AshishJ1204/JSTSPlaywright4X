User: ELI5 this "Add example of call by reference, shallow by ...spread and deep copy by structuredClone with objects"

Copilot: Read skill `eli5`
Completed with input: {"skill":"eli5"}

Sure — here’s the ELI5 version.

Think of JavaScript objects like boxes.

1) Call by reference
Imagine 2 kids both get the same toy box label.

```js
const person = { name: "Amit", city: "Pune" };

function updateCity(obj) {
  obj.city = "Mumbai";
}

updateCity(person);

console.log(person);
// { name: "Amit", city: "Mumbai" }
```

What happened?
- `person` is a box
- `updateCity(person)` passes the same box to the function
- the function changes the box
- so the original box is also changed

So in JavaScript:
- primitive values like strings/numbers are copied
- objects are shared by reference

This means if two variables point to the same object, changing one changes the other.

```js
const a = { x: 10 };
const b = a;

b.x = 20;

console.log(a.x); // 20
```

Both `a` and `b` are pointing to the same object.

2) Shallow copy with spread `...`

A shallow copy is like making a new outer box, but the inner things inside are still shared.

```js
const user = {
  name: "Amit",
  address: {
    city: "Pune"
  }
};

const copiedUser = { ...user };

copiedUser.name = "Rahul";
copiedUser.address.city = "Mumbai";
```

Now check:

```js
console.log(user);
// { name: "Amit", address: { city: "Mumbai" } }
```

Why?
- `...user` copied the top-level fields
- but `address` is still the same inner object
- so nested data is still shared

This is the key idea:
- shallow copy = new top layer
- same inner objects

3) Deep copy with `structuredClone`

A deep copy is like copying the whole box and every little thing inside it.

```js
const user = {
  name: "Amit",
  address: {
    city: "Pune"
  }
};

const deepCopy = structuredClone(user);

deepCopy.name = "Rahul";
deepCopy.address.city = "Mumbai";

console.log(user);
// { name: "Amit", address: { city: "Pune" } }
```

Now the original is safe.

Why?
- `structuredClone` makes a full duplicate
- nested object is also cloned
- so changing one does not affect the other

Very simple analogy:
- Call by reference = handing the same box to someone
- Shallow copy = making a new outer box, but putting the same inner toys in it
- Deep copy = making a completely new box with completely new toys inside

Quick summary

```js
const original = {
  name: "Amit",
  profile: {
    city: "Pune"
  }
};

// same reference
const ref = original;

// shallow copy
const shallow = { ...original };

// deep copy
const deep = structuredClone(original);
```

Important notes:
- `...` does not deeply clone nested objects
- `structuredClone` is better for nested objects
- `structuredClone` does not clone functions

Example with arrays

```js
const arr1 = [1, { a: 2 }];
const arr2 = [...arr1];

arr2[1].a = 99;

console.log(arr1); // [1, { a: 99 }]
```

This proves the spread is shallow.

But:

```js
const arr3 = structuredClone(arr1);
arr3[1].a = 50;

console.log(arr1); // [1, { a: 99 }] - unchanged
```

This is deep copy.

One-liner ELI5 version:
- Reference = same box
- Shallow copy = new box, same inside
- Deep copy = brand new box, brand new inside

If you want, I can also give:
- a very small “real-world JavaScript interview answer”
- a Playwright-related example with page objects and options objects
- a “common mistake” section showing when shallow copy breaks your app

**Task completed:**

Explained JavaScript reference vs shallow copy vs deep copy with a simple box analogy and examples including object mutation behavior.