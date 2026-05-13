
// 1. ANY (No type safety)

let a: any = 10;
a = "hello";
a = true;

console.log("ANY example:");
console.log(a); // last assigned value


// 2. UNKNOWN (Safe any)

let u: unknown = "TypeScript";


if (typeof u === "string") {
    console.log("UNKNOWN example:");
    console.log(u.toUpperCase());
}


// 3. NEVER (Impossible type)

function throwError(message: string): never {
    throw new Error(message);
}


// 4. NULL

let n: null = null;
console.log("NULL example:", n);


// 5. UNDEFINED

let un: undefined = undefined;
console.log("UNDEFINED example:", un);


// 6. OPTIONAL PARAMETER (undefined use case)

function greet(name?: string) {
    console.log("Hello", name ?? "Guest");
}

greet("Alice");
greet();