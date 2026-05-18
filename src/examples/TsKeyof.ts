//keyof with explicit keys
interface Person {
    name: string;
    age: number;
    
}
type PersonKeys = keyof Person; 
function printPersonProperty(person:Person,property:PersonKeys){
    console.log(person[property]);
}
const person:Person={
    name:"Max",
    age:27
};
printPersonProperty(person,"name");
printPersonProperty(person,"age");

//keyof with index signatures
type StringMap={
    [key:string]:string;
};
type StringMapKeys=keyof StringMap;
function createStringPair(
    property:StringMapKeys,
    value:string
):StringMap{return{[property]:value};
}
const result =createStringPair("country","India");
console.log(result);
//generic+keyof example
function getProperty<T, K extends keyof T>(

    obj: T,

    key: K

) {

    return obj[key];

}
 
const product = {

    id: 101,

    name: "Laptop",

    price: 50000

};
 
console.log(getProperty(product, "price"));
 export {};