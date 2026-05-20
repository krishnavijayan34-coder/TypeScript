function Role(role: string) {

    return function (constructor: Function) {

        console.log(
            `Class ${constructor.name} has role ${role}`
        );
    };
}

@Role("Admin")
class Manager {

}

const m1 = new Manager();