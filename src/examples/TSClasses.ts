// 1. CLASS MEMBERS AND TYPES
class Person{
    name!:string;
}
const person1=new Person();
person1.name="krishna";
console.log("Person Name:",person1.name);

// 2. CONSTRUCTOR
class Student{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}
const student1=new Student("Megha");
console.log("Student Name:",student1.name);

//visibility  modifiers 3
//3.(1)PUBLIC MODIFIER
 class Employee {
    public empName:string;
    constructor(empName:string){
        this.empName=empName;
    }
 }
 const emp1=new Employee("Gowri");
 console.log("Employee name:",emp1.empName);

 //3.(2)PRIVATE MODIFIER
 class BankAccount{
    private balance:number;
    constructor(balance:number){
        this.balance=balance;
    }
    public getBalance():number{
        return this.balance;
    }
 }
 const account=new BankAccount(5000);
 console.log("Balance:",account.getBalance());

 //3.(3)PROTECTED MODIFIER
 class Animal{
    protected sound:string;
    constructor(sound:string){
        this.sound=sound;
    }
 }
 class Dog extends Animal{
    public printSound(){
        console.log("Dog sound:",this.sound);
    }
 }
 const dog=new Dog("Bark");
 dog.printSound();

 //4.PARAMETER PROPERTIES
 class Car{
    constructor(private brand:string){}
    public getBrand():string{
        return this.brand;
    }
 }
 const car=new Car("Toyota");
 console.log("Car Brand:",car.getBrand());

 //5.ReadOnly
 class Mobile{
    private readonly model:string;
    constructor(model:string){
        this.model=model;
    }
    public getModel():string{
        return this.model;
    }
 }
 const mobile=new Mobile("Redmi");
 console.log("Mobile Model:",mobile.getModel());

 //6.INTERFACE + IMPLEMENTS
 interface Shape{
    getArea():number;
 }
 class Rectangle implements Shape{
    constructor(
        protected width:number,
        protected height:number
    ){}
    public getArea(): number {
        return this.width*this.height;
    }
 }
 const rectangle =new Rectangle(10,5);
 console.log("Rectangle Area:",rectangle.getArea());

 //7.INHERITANCE USING EXTENDS
 class Parent {
    public message(){
        console.log("message from parent")
    }
 }
 class Child extends Parent{
}
const child=new Child();
child.message();

//8.OVERRIDE
class Bird{
    public sound():string{
        return "Bird Sound"
    }
}
class Parrot extends Bird{
    public override sound(): string {
        return "Parrot Talking";
    }
}
const parrot=new Parrot();
console.log(parrot.sound());

//9.ABSTRACT CLASS
abstract class Polygon {
    abstract getArea():number; 
    public print(){
        console.log("Polygon Class");
    }
        
    }
class Square extends Polygon{
    constructor(private side:number){
        super();
    }
    public getArea(): number {
        return this.side*this.side;
    }
}
const square = new Square(4);
square.print();
console.log("Square Area:",square.getArea());
 export {};