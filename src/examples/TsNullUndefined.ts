// NULL & UNDEFINED TYPES
let username:string | null=null;
username="krishna";
console.log(username);
//Optional Chaining
type User={
    name:string;
    address?:{
        city:string;
    };
};
const user:User={
    name:"Navami",
};
console.log(user.address?.city);

//Nullish Coalescing
let mileage:number | null=null;
console.log(mileage??"Not Available");

//Null Assertion
function getValue():string | undefined{
    return "Hello";
}
let value=getValue();
console.log(value!.length);

//Array Bounds Handling
let numbers:number[]=[1,2,3];
console.log(numbers[0]);
console.log(numbers[10]);

export {};