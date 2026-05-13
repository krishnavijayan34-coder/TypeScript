// OBJECT TYPES

const student: { name: string, age: number } = {

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

const employee: { name: string, salary?: number } = {

    name: "Rahul"

};

employee.salary = 25000;

console.log(employee);


// INDEX SIGNATURES

const marks: { [subject: string]: number } = {};

marks.Maths = 90;

marks.English = 85;

// marks.Science = "A+"; // Error

console.log(marks);