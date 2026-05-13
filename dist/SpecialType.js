"use strict";
// 1. ANY (No type safety)
let a = 10;
a = "hello";
a = true;
console.log("ANY example:");
console.log(a); // last assigned value
// 2. UNKNOWN (Safe any)
let u = "TypeScript";
if (typeof u === "string") {
    console.log("UNKNOWN example:");
    console.log(u.toUpperCase());
}
// 3. NEVER (Impossible type)
function throwError(message) {
    throw new Error(message);
}
// 4. NULL
let n = null;
console.log("NULL example:", n);
// 5. UNDEFINED
let un = undefined;
console.log("UNDEFINED example:", un);
// 6. OPTIONAL PARAMETER (undefined use case)
function greet(name) {
    console.log("Hello", name ?? "Guest");
}
greet("Alice");
greet();
//# sourceMappingURL=SpecialType.js.map