"use strict";
// OBJECT TYPES
const student = {
    name: "Anu",
    age: 21
};
console.log(student);
console.log(student.name);
// TYPE INFERENCE
const fruit = {
    name: "Apple"
};
fruit.name = "Orange";
// fruit.name = 10; // Error
console.log(fruit);
// OPTIONAL PROPERTIES
const employee = {
    name: "Rahul"
};
employee.salary = 25000;
console.log(employee);
// INDEX SIGNATURES
const marks = {};
marks.Maths = 90;
marks.English = 85;
// marks.Science = "A+"; // Error
console.log(marks);
//# sourceMappingURL=TSObjectTypes.js.map