"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPersonProperty(person, property) {
    console.log(person[property]);
}
const person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name");
printPersonProperty(person, "age");
function createStringPair(property, value) {
    return { [property]: value };
}
const result = createStringPair("country", "India");
console.log(result);
//generic+keyof example
function getProperty(obj, key) {
    return obj[key];
}
const product = {
    id: 101,
    name: "Laptop",
    price: 50000
};
console.log(getProperty(product, "price"));
//# sourceMappingURL=TsKeyof.js.map