"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. GENERIC FUNCTION
function display(value) {
    return value;
}
console.log(display(100));
console.log(display("hlo"));
console.log(display(true));
// 2. GENERIC FUNCTION WITH MULTIPLE TYPES
//<S,T> = Two Generic Types
function createPair(value1, value2) {
    return [value1, value2];
}
console.log(createPair("Krishna", 22));
console.log(createPair(true, "TypeScript"));
// 3. GENERIC CLASS
class Box {
    value;
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let numberBox = new Box();
numberBox.setValue(100);
console.log(numberBox.getValue());
let stringBox = new Box();
stringBox.setValue("hlo ts");
console.log(stringBox.getValue());
const numberData = {
    value: 100
};
const stringData = {
    value: "Hello"
};
console.log(numberData);
console.log(stringData);
let user1 = {
    data: "Krishna"
};
let user2 = {
    data: 101
};
console.log(user1);
console.log(user2);
// 6. DEFAULT GENERIC TYPE
class DefaultData {
    value;
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let data1 = new DefaultData();
data1.setValue("Hello");
console.log(data1.getValue());
let data2 = new DefaultData();
data2.setValue(100);
console.log(data2.getValue());
// 7. GENERIC CONSTRAINTS USING EXTENDS
function printLength(value) {
    console.log(value.length);
}
printLength("TypeScript");
// 8. CONSTRAINT EXAMPLE WITH NUMBER
function addValues(a, b) {
    return a + b;
}
console.log(addValues(10, 20));
// 9. DIFFERENCE BETWEEN ANY AND GENERICS
function anyExample(value) {
    return value;
}
console.log(anyExample(100));
console.log(anyExample("Hello"));
function genericExample(value) {
    return value;
}
console.log("\nGeneric Example");
console.log(genericExample(500));
console.log(genericExample("TypeScript"));
//# sourceMappingURL=TSBasicGenerics.js.map