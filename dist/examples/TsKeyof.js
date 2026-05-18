"use strict";
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
//# sourceMappingURL=TsKeyof.js.map