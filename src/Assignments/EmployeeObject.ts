const employee={
    id:1,name:"krishna",role:"Engineer",salary:25000

}
function printEmployee(emp:{
    id:number,name:string,role:string,salary:number
})
{
    console.log("Employee ID:",emp.id)
    console.log("Employee Name:",emp.name)
    console.log("Employee Role:",emp.role)
    console.log("Employee Salary:",emp.salary)

}
printEmployee(employee)

export {};