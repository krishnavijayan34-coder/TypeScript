interface UserActions{
    login(username:string):void;
    logout(username:string):void;
}
class User implements UserActions{
    name:string;email:string;
    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }
    login(username: string): void {
        console.log(username + " is logged in");
    }
    logout(username: string): void {
        console.log(username + " is logged out")
    }
}
let user1=new User("krishna","krishna@gmail.com");
user1.login("Krishna");
user1.logout("Krishna");
export {};