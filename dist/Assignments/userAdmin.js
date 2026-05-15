"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let loggedUsers = [];
class User {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login(username) {
        console.log(username + " is logged in");
        loggedUsers.push(username);
    }
}
class Admin extends User {
    role;
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }
    viewUsers() {
        console.log(loggedUsers);
    }
}
let user1 = new User("Krishna", "krishnavijayan@gmail.com");
let user2 = new User("Arjun", "arjun@gmail.com");
user1.login("Krishna");
user2.login("Arjun");
let admin1 = new Admin("Admin", "admin@gmail.com", "Manager");
admin1.viewUsers();
//# sourceMappingURL=userAdmin.js.map