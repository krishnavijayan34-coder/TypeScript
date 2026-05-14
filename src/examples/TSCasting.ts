// CASTING WITH as
let value1:unknown="hello";
console.log("Length using as:",(value1 as string).length);

// CASTING WITH <>
let value2:unknown="krishna";
console.log("Length using <>:",(<string>value2).length);

// WRONG CASTING

let value3: unknown = 10;

console.log(
    "Wrong Casting:",
    (value3 as string).length
);

// FORCE CASTING

let value4 = "Hello";

console.log(
    "Force Casting:",
    ((value4 as unknown) as number)
);