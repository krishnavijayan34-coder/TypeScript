type Product={
     id:number;
     name:string;
     price:number;
     category:string;
}
function searchByField<T,K extends keyof T>(
     items:T[],
     key:K,
     value:T[K]
):T[]{
     return items.filter(item=>item[key]===value);
}
const Products:Product[]=[
     {id:1,name:"Mobile",price:250000,category:"Electronics"},
     {id:2,name:"Dress",price:800,category:"Fashion"},
     {id:3,name:"Book",price:500,category:"Stationary"},
     {id:4,name:"Laptop",price:40000,category:"Electronics"}
];
console.log("Search by name:");
console.log(searchByField(Products,"name","Dress"));

console.log("Search by price:");
console.log(searchByField(Products,"price",500));

console.log("Search by category:");
console.log(searchByField(Products,"category","Electronics"));
export {};