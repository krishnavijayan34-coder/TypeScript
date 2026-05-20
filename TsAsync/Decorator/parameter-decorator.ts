function LogParameter(
    target:any,
    propertyKey:string,
    parameterIndex:number
) {
    console.log("Parameter Index:",parameterIndex,
        "Method:",propertyKey
    );
}
class Demo {
    greet(
        @LogParameter message:string
    ) {
        console.log(message);
    }
}
const d1 = new Demo();
d1.greet("Hello");