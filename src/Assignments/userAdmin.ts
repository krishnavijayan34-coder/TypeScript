
class User{
    name:string;
    email:string;
    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }
    login(username:string){
    console.log(username + " is logged in");
    
    }
}

class Admin extends User{
    role:string;
    users:string[]=[];
    constructor(name:string,email:string,role:string){
        super(name,email);
        this.role=role;
    }
    login(username: string){
        console.log(username + " is logged in");
        this.users.push(username);
    }
    viewUsers(){
        console.log(this.users);
    }
}
let user1=new User("Krishna","krishnavijayan@gmail.com");
user1.login("Krishna");
let admin1=new Admin("Admin","admin@gmail.com","Manager")
admin1.login("Krishna");
admin1.login("Arjun");
admin1.viewUsers();
export {};