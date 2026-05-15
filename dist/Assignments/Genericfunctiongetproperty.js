"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProperty(obj, key) {
    return obj[key];
}
const student = {
    rollNo: 1,
    name: "Krishna",
    course: "Applied Electronics & Instrumentation"
};
console.log("Student Name:", getProperty(student, "name"));
console.log("Student Course:", getProperty(student, "course"));
//# sourceMappingURL=Genericfunctiongetproperty.js.map