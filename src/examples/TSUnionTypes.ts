function printStatusCode(code:string | number){
    console.log("Received value:",code)
    if(typeof code==="string"){
        console.log("This is a string")
        console.log("Uppercase:",code.toUpperCase())
    } else {
        console.log("This is a number")
        console.log("Number value :",code)
    }
}
printStatusCode(404)

printStatusCode("hello")