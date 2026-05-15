let loggedUsers:string[]=[];
class User{
    name:string;
    email:string;
    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }
    login(username:string){
    console.log(username + " is logged in");
    loggedUsers.push(username);
    }
}

class Admin extends User{
    role:string;
    constructor(name:string,email:string,role:string){
        super(name,email);
        this.role=role;
    }
    viewUsers(){
        console.log(loggedUsers);
    }
}
let user1=new User("Krishna","krishnavijayan@gmail.com");
let user2=new User("Arjun","arjun@gmail.com");
user1.login("Krishna");
user2.login("Arjun");
let admin1=new Admin("Admin","admin@gmail.com","Manager")
admin1.viewUsers();
export {};