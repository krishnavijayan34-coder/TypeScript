// 1. GENERIC FUNCTION
function display<T>(value:T):T{
    return value;
}
console.log(display<number>(100));
console.log(display<string>("hlo"));
console.log(display<boolean>(true));

// 2. GENERIC FUNCTION WITH MULTIPLE TYPES
//<S,T> = Two Generic Types
function createPair<S,T>(value1:S,value2:T):[S,T]{
    return[value1,value2];
}
console.log(createPair<string,number>("Krishna",22));

console.log(createPair<boolean,string>(true,"TypeScript"));

// 3. GENERIC CLASS
class Box<T>{
    private value!:T;
    setValue(value:T){
        this.value=value;
    }
    getValue():T{
        return this.value;
    }
}
let numberBox=new Box<number>();
numberBox.setValue(100);
console.log(numberBox.getValue());

let stringBox=new Box<string>();
stringBox.setValue("hlo ts");
console.log(stringBox.getValue());

// 4. GENERIC TYPE ALIAS
type Data<T>={

    value:T
}

const numberData:Data<number>={

    value:100
}

const stringData:Data<string>={

    value:"Hello"
}
console.log(numberData);

console.log(stringData);
// 5. GENERIC INTERFACE

interface User<T>{

    data:T
}
let user1:User<string>={

    data:"Krishna"
}

let user2:User<number>={

    data:101
}

console.log(user1);

console.log(user2);

// 6. DEFAULT GENERIC TYPE
class DefaultData<T=string>{

    value!:T;

    setValue(value:T){

        this.value=value;
    }

    getValue():T{

        return this.value;
    }
}
let data1=new DefaultData();

data1.setValue("Hello");

console.log(data1.getValue());
let data2=new DefaultData<number>();

data2.setValue(100);

console.log(data2.getValue());

// 7. GENERIC CONSTRAINTS USING EXTENDS
function printLength<T extends string>(value:T){

    console.log(value.length);
}
printLength("TypeScript");

// 8. CONSTRAINT EXAMPLE WITH NUMBER

function addValues<T extends number>(a:T,b:T){

    return a+b;
}
console.log(addValues(10,20));
// 9. DIFFERENCE BETWEEN ANY AND GENERICS
function anyExample(value:any){

    return value;
}
console.log(anyExample(100));

console.log(anyExample("Hello"));
function genericExample<T>(value:T):T{

    return value;
}

console.log("\nGeneric Example");

console.log(genericExample<number>(500));

console.log(genericExample<string>("TypeScript"));



export {};