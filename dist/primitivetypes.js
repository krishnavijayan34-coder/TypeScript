"use strict";
//Boolean
let isActive = true;
let hasPermission = false;
console.log(isActive);
console.log(hasPermission);
//Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let float = 3.14;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log(float);
//string
let color = "yellow";
let fullName = 'Krishna Vijayan P';
let age = 23;
let sentence = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
console.log(color);
console.log(fullName);
console.log(age);
console.log(sentence);
//BigInt
const hugeNumber = BigInt(9007199254740991);
console.log(hugeNumber);
//symbol
const uniqueKey = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);
//# sourceMappingURL=primitivetypes.js.map