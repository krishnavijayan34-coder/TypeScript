// Simple TypeScript example

// Variable with type
let userName: string = "Krishna";
let age: number = 22;

// Function with typed parameters and return type
function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

// Array with type
let numbers: number[] = [1, 2, 3, 4, 5];

// Object with type
let user: { name: string; age: number } = {
  name: userName,
  age: age,
};

// Print outputs
console.log(greet(userName));
console.log("Numbers:", numbers);
console.log("User:", user);
export {};