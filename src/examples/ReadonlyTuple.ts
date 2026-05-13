// Without readonly:
let user: [number, string] = [1, "Alice"];
user.push("extra"); // TypeScript allows this (surprisingly!)
console.log(user);

// With readonly:
let secureUser: readonly [number, string] = [1, "Alice"];
//secureUser.push("extra"); // ERROR: Property 'push' does not exist on type 'readonly [number, string]'
console.log(secureUser);
export {};