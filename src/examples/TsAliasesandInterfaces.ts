//TYPE ALIAS 
type UserName=string;
let user:UserName="krishna"
console.log(user);

// OBJECT TYPE ALIAS
type Student={
    name:string;
    age:number
};

const student1:Student={
    name:"Navami",
    age:26
};
console.log(student1);

//ARRAY TYPE ALIAS
type Numbers=number[];
let marks:Numbers=[10,20,30];
console.log(marks);


// UNION TYPE 
type Status="success" | "error";
let response:Status="success";
console.log(response);


// INTERSECTION TYPE 
type Animal={
    name:string
};
type Bear=Animal & {
    honey:boolean
};
const bear:Bear={
    name:"krishna",
    honey:true
};
console.log(bear);

// INTERFACE 
interface Rectangle{
    height:number,
    width:number
}
const rectangle:Rectangle={
    height:20,
    width:10
};
console.log(rectangle);

//  INTERFACE MERGING
interface Dog{
    name:string
}
interface Dog{
    age:number
}
const dog1:Dog={
    name:"Tommy",
    age:1
};
console.log(dog1);


// EXTENDING INTERFACE 
interface Shape{
    height:number,
    width:number,
}
interface ColoredShape extends Shape{
    color:string
}
const shape1:ColoredShape={
    height:50,
    width:30,
    color:"Blue"
};
console.log(shape1);











export {};
