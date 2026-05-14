// RETURN TYPE
function getTime(): number {
    return new Date().getTime();
}

console.log("Current Time:", getTime())


// VOID FUNCTION
function printHello(): void {
    console.log("Hello!")
}

printHello()


// PARAMETERS
function multiply(a:number, b:number) {
    return a * b
}

console.log("Multiply:", multiply(2,3))


// OPTIONAL PARAMETER
function add(a:number, b:number, c?:number) {
    return a + b + (c || 0)
}

console.log("Add 1:", add(2,3))
console.log("Add 2:", add(2,3,4))


// DEFAULT PARAMETER
function pow(value:number, exponent:number = 2) {
    return value ** exponent
}

console.log("Power 1:", pow(5))
console.log("Power 2:", pow(5,3))


// NAMED PARAMETERS
function divide(
    {dividend, divisor}: {dividend:number, divisor:number}
){
    return dividend / divisor
}

console.log(
    "Division:",
    divide({dividend:10, divisor:2})
)


// REST PARAMETERS
function addNumbers(a:number, b:number, ...rest:number[]) {

    return a + b + rest.reduce((p,c) => p + c, 0)

}

console.log(
    "Rest Add:",
    addNumbers(1,2,3,4,5)
)


// TYPE ALIAS
type Negate = (value:number) => number;

const negateFunction: Negate = (value) => value * -1;

console.log(
    "Negate:",
    negateFunction(5)
)
export {};