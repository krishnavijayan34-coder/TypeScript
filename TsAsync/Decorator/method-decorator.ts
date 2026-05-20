function LogMethod(
    target:any,
    propertyKey:string,
    descriptor:PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value=function(...args:any[]) {
        console.log("Method Called:",propertyKey);
        return originalMethod.apply(this, args);
    };
}
class Calculator {
    @LogMethod
    add(a: number, b: number): number {
        return a + b ;
    }
}
const c1 = new Calculator();
console.log(c1.add(10,20));