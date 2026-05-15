// PARTIAL

interface User{

    name:string;

    age:number;
}

let user1:Partial<User>={};

user1.name="Krishna";

console.log(user1);


// REQUIRED

interface Car{

    brand:string;

    model?:string;
}

let car1:Required<Car>={

    brand:"Toyota",

    model:"Innova"
};

console.log(car1);


// RECORD

const studentMarks:Record<string,number>={

    Krishna:90,

    Arjun:85
};

console.log(studentMarks);


// OMIT

interface Person{

    name:string;

    age:number;

    location:string;
}

let p1:Omit<Person,"age" | "location">={

    name:"Krishna"
};

console.log(p1);


// PICK

interface Employee{

    name:string;

    salary:number;

    department:string;
}

let emp1:Pick<Employee,"name" | "department">={

    name:"Krishna",

    department:"HR"
};

console.log(emp1);


// EXCLUDE

type Data=string | number | boolean;

let value:Exclude<Data,string>=true;

console.log(value);


// RETURNTYPE

function getUser(){

    return{

        name:"Krishna",

        age:22
    };
}

type UserType=ReturnType<typeof getUser>;

let user2:UserType={

    name:"Arjun",

    age:25
};

console.log(user2);


// PARAMETERS

function display(name:string,age:number){

}

let user3:Parameters<typeof display>=["Krishna",22];

console.log(user3);


// READONLY

interface Student{

    name:string;

    age:number;
}

const student1:Readonly<Student>={

    name:"Krishna",

    age:22
};

console.log(student1);

export {};