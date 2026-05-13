function values(a:number,b:number):[number,number,number]{
     let addition =a+b;
     let subtraction =a-b;
     let multiplication =a*b;
     return[addition,subtraction,multiplication];
}
let [add,sub,mul]=values(8,2);
console.log("Addition :",add);
console.log("Subtraction :",sub);
console.log("Multiplication :",mul);

export {};