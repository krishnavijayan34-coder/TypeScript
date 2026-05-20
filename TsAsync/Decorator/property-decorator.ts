function LogProperty(target: any, propertyKey: string) {

    let value: any;

    const getter = function () {
        console.log(`Getting ${propertyKey}: ${value}`);
        return value;
    };

    const setter = function (newVal: any) {
        console.log(`Setting ${propertyKey}: ${newVal}`);
        value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class Employee {

    @LogProperty
    company: string;

    constructor(company: string) {
        this.company = company;
    }
}

const e1 = new Employee("Microsoft");

console.log(e1.company);