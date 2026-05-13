let employees:[number,string][]=[
    [1,'Krishna'],[2,'Navami'],[3,'Megha'],[4,'Gowri']
];

for(let [id,name] of employees){
    console.log("Employee ID : ",id);
    console.log("Employee Name :",name);
}
export {};
