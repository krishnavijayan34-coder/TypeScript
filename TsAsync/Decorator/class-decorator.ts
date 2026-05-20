function Logger(constructor:Function){
    console.log("Class Created:",constructor.name);
}
@Logger
class Student {
    name:string;
    constructor(name:string){
        this.name=name;
        console.log("Student Object Created");
    }
}
const s1=new Student("Krishna");