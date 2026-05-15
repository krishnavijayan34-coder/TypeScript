"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    email;
    password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    login(username) {
        console.log(username + " is logged in");
    }
    forgotPassword() {
        console.log("password reset link sent to " + this.email);
    }
}
class Admin extends User {
    role;
    users = [];
    constructor(name, email, password, role) {
        super(name, email, password);
        this.role = role;
    }
    login(username) {
        console.log(username + " is logged in");
        this.users.push(username);
    }
    viewUsers() {
        console.log(this.users);
    }
    adminDetails() {
        console.log(this.name);
        console.log(this.email);
    }
}
let user1 = new User("Krishna", "krishnavijayan@gmail.com", "Krishna@123");
user1.login("Krishna");
user1.forgotPassword();
let admin1 = new Admin("Admin", "admin@gmail.com", "admin123", "Manager");
admin1.login("Krishna");
admin1.login("Arjun");
admin1.viewUsers();
//# sourceMappingURL=userAdmin.js.map