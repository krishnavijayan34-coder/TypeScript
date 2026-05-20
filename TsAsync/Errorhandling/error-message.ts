function divide(a:number,b:number):number{
    if(b===0){
        throw new Error("Division by zero is not allowed");
    }
    return a/b;
}
try {
    const result=divide(10,0);
    console.log(result);
} catch (error){
    if(error instanceof Error){
        console.log(error.message);
    }
}
export default{};