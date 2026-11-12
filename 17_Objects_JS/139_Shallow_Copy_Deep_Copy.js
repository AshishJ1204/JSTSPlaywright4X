// JavaScript copies an object reference by value. These variables point to the same object.
const original = {
  name: "Amit",
  address: {
    city: "Pune",
  },
};

const sameReference = original;
sameReference.name = "Rahul";

console.log("After changing the shared object:");
console.log(original.name); // Rahul

// Spread makes a shallow copy: the outer object is new, but nested objects are shared.
const shallowCopy = { ...original };
shallowCopy.name = "Neha";
shallowCopy.address.city = "Mumbai";

console.log("After changing the shallow copy:");
console.log(original.name); // Rahul: top-level name is independent
console.log(original.address.city); // Mumbai: nested address is still shared

// structuredClone makes a deep copy of this object's nested data.
const deepCopy = structuredClone(original);
deepCopy.name = "Ravi";
deepCopy.address.city = "Delhi";

console.log("After changing the deep copy:");
console.log(original.name); // Rahul
console.log(original.address.city); // Mumbai
console.log(deepCopy.name); // Ravi
console.log(deepCopy.address.city); // Delhi