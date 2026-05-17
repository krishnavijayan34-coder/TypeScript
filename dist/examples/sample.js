"use strict";
// Simple TypeScript example
Object.defineProperty(exports, "__esModule", { value: true });
// Variable with type
let userName = "Krishna";
let age = 22;
// Function with typed parameters and return type
function greet(name) {
    return `Hello, ${name}! Welcome to TypeScript.`;
}
// Array with type
let numbers = [1, 2, 3, 4, 5];
// Object with type
let user = {
    name: userName,
    age: age,
};
// Print outputs
console.log(greet(userName));
console.log("Numbers:", numbers);
console.log("User:", user);
//# sourceMappingURL=sample.js.map