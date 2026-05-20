function isError(error:unknown):error is Error{
    return error instanceof Error;
}
try {
    throw new Error("Something failed");
    
} catch (error){
    if(isError(error)){
        console.log(error.message);
    }
}