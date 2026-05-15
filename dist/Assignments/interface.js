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
    logout(username) {
        console.log(username + " is logged out");
    }
}
let user1 = new User("krishna", "krishna@gmail.com");
user1.login("Krishna");
user1.logout("Krishna");
//# sourceMappingURL=interface.js.map