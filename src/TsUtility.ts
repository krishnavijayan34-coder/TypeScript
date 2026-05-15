//Partial utility
interface User{
    name:string;
    age:number;
}
let user1:Partial<User>={};
user1.name="Gowri";
console.log(user1);
//Required
interface Car{
    brand:string;
    model?:string;
}
let car1:Required<Car>={
    brand:"Toyota",
    model:"Innova"
};
console.log(car1);

//Record
const studentMarks:Record<string,number>={
    krishna:90,
    Megha:85
};
console.log(studentMarks);
//Omit
interface Person{
    name:string;age:number;location:string;
}
let p1:Omit<Person,"age" | "location">={
    name:"Krishna"
};
console.log(p1);
//Pick
interface Employee{
    name:string;salary:number;department:string;
}
let emp1:Pick<Employee,"name" | "department">={
    name:"Krishna",department:"HR"
};
console.log(emp1);

//Exclude
type Data=string | number |boolean;
let value:Exclude<Data,string>=true;
console.log(value);

//Return type
function getUser(){
    return{
        name:"Krishna",age:23
    };
}
type UserType=ReturnType<typeof getUser>;
let user2:UserType={
    name:"Megha",age:24
};
console.log(user2);

//Parameters
function display(name:string,age:number){

}
let user3:Parameters<typeof display>=["Krishna",23];
console.log(user3);

//Readonly
interface Student{
    name:string;
    age:number;
}
const student1:Readonly<Student>={
    name:"Krishna",age:23
};
console.log(student1);
export {};