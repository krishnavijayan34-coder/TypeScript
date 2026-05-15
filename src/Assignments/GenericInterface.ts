interface Operation<T>{
    (a:T,b:T):T;
}
const multiply:Operation<number>=(a,b)=>{
    return a*b;
};
console.log("Multiplication Result:",multiply(8,4));
const joinText:Operation<string>=(a,b)=>{
    return a+b;
};
console.log("joined Text:",joinText("Welcome"," Krishna"));

export {};