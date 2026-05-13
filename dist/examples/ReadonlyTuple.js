"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Without readonly:
let user = [1, "Alice"];
user.push("extra"); // TypeScript allows this (surprisingly!)
console.log(user);
// With readonly:
let secureUser = [1, "Alice"];
//secureUser.push("extra"); // ERROR: Property 'push' does not exist on type 'readonly [number, string]'
console.log(secureUser);
//# sourceMappingURL=ReadonlyTuple.js.map