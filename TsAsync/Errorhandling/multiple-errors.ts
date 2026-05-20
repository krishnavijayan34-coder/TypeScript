class NetworkError extends Error {}
class ValidationError extends Error {}
function login(username:string){
    if(username.length<3){
        throw new ValidationError("Invalid usernmae");
    }
    throw new NetworkError("server not reachable");
}
try {
    login("Kr");
    
}catch(error){
    if (error instanceof ValidationError){
        console.log("Validation error");
    
    }else if (error instanceof NetworkError){
        console.log("Network Error");
    }else{
        console.log("Unknown Error");
    }
}
export default {};