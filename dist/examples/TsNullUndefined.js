"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NULL & UNDEFINED TYPES
let username = null;
username = "krishna";
console.log(username);
const user = {
    name: "Navami",
};
console.log(user.address?.city);
//Nullish Coalescing
let mileage = null;
console.log(mileage ?? "Not Available");
//Null Assertion
function getValue() {
    return "Hello";
}
let value = getValue();
console.log(value.length);
//Array Bounds Handling
let numbers = [1, 2, 3];
console.log(numbers[0]);
console.log(numbers[10]);
//# sourceMappingURL=TsNullUndefined.js.map