"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. CLASS MEMBERS AND TYPES
class Person {
    name;
}
const person1 = new Person();
person1.name = "krishna";
console.log("Person Name:", person1.name);
// 2. CONSTRUCTOR
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
const student1 = new Student("Megha");
console.log("Student Name:", student1.name);
//visibility  modifiers 3
//3.(1)PUBLIC MODIFIER
class Employee {
    empName;
    constructor(empName) {
        this.empName = empName;
    }
}
const emp1 = new Employee("Gowri");
console.log("Employee name:", emp1.empName);
//3.(2)PRIVATE MODIFIER
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(5000);
console.log("Balance:", account.getBalance());
//3.(3)PROTECTED MODIFIER
class Animal {
    sound;
    constructor(sound) {
        this.sound = sound;
    }
}
class Dog extends Animal {
    printSound() {
        console.log("Dog sound:", this.sound);
    }
}
const dog = new Dog("Bark");
dog.printSound();
//4.PARAMETER PROPERTIES
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        return this.brand;
    }
}
const car = new Car("Toyota");
console.log("Car Brand:", car.getBrand());
//5.ReadOnly
class Mobile {
    model;
    constructor(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
}
const mobile = new Mobile("Redmi");
console.log("Mobile Model:", mobile.getModel());
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(10, 5);
console.log("Rectangle Area:", rectangle.getArea());
//7.INHERITANCE USING EXTENDS
class Parent {
    message() {
        console.log("message from parent");
    }
}
class Child extends Parent {
}
const child = new Child();
child.message();
//8.OVERRIDE
class Bird {
    sound() {
        return "Bird Sound";
    }
}
class Parrot extends Bird {
    sound() {
        return "Parrot Talking";
    }
}
const parrot = new Parrot();
console.log(parrot.sound());
//9.ABSTRACT CLASS
class Polygon {
    print() {
        console.log("Polygon Class");
    }
}
class Square extends Polygon {
    side;
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}
const square = new Square(4);
square.print();
console.log("Square Area:", square.getArea());
//# sourceMappingURL=TSClasses.js.map