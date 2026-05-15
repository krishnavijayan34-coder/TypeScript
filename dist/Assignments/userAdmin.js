"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login(username) {
        console.log(username + " is logged in");
    }
}
class Admin extends User {
    role;
    users = [];
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }
    login(username) {
        console.log(username + " is logged in");
        this.users.push(username);
    }
    viewUsers() {
        console.log(this.users);
    }
}
let user1 = new User("Krishna", "krishnavijayan@gmail.com");
user1.login("Krishna");
let admin1 = new Admin("Admin", "admin@gmail.com", "Manager");
admin1.login("Krishna");
admin1.login("Arjun");
admin1.viewUsers();
//# sourceMappingURL=userAdmin.js.map