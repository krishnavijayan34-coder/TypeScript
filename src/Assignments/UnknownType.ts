function printValue(value:unknown){
    if(typeof value=="string"){
        console.log("string value:",value);
    }
    else if(typeof value=="number"){
        console.log("Number value :",value);
    }
    else {
        console.log("Unknown type");
    }
}
printValue("Krishna");
printValue(100);
export {};