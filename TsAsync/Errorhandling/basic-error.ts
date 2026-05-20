function divide(a:number,b:number):number{
    if(b==0){
        throw new Error("Division by zero");
    }
    return a/b;
}
try {
    const result=divide(10,0);
    console.log(result);

} catch (error){
    console.log("An error occured");
    
}