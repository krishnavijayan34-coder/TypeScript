interface User {
    id:number;
    name:string;
    email:string;
}
 function fetchUsers():Promise<User[]>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {
                    id:1,
                    name:"Krishna",
                    email:"krishna@gmail.com"

                },
                  {
                    id:2,
                    name:"Gowri",
                    email:"gowri@gmail.com"

                }
        ]);
        },2000);
    });
 }

async function displayUsers(){
    const users=await fetchUsers();
    users.forEach((user)=>{
        console.log(user.name);
        console.log(user.email);
    });
}
displayUsers();