// 1. STRING ARRAY
const names: string[] = ["krishna", "megha"];

console.log("String Array:");
console.log(names);

names.push("Jack"); // OK
// names.push(3);   //  Error: number not allowed

console.log("After push:", names);


// 2. NUMBER ARRAY
const numbers: number[] = [1, 2, 3];

console.log("\nNumber Array:");
console.log(numbers);

numbers.push(4); // OK
// numbers.push("5"); //  Error

console.log("After push:", numbers);


// 3. READONLY ARRAY
const readonlyNames: readonly string[] = ["Dylan"];

console.log("\nReadonly Array:");
console.log(readonlyNames);

// readonlyNames.push("Jack");  Error (cannot modify)


// 4. TYPE INFERENCE ARRAY
const inferredNumbers = [10, 20, 30]; // inferred as number[]

console.log("\nInferred Array:");
console.log(inferredNumbers);

inferredNumbers.push(40); // OK
// inferredNumbers.push("50");  Error

console.log("After push:", inferredNumbers);


// 5. ACCESS ARRAY ELEMENT
let firstNumber: number = inferredNumbers[0];

console.log("\nFirst element:");
console.log(firstNumber);