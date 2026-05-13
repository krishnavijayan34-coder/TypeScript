let Product:[string,number,boolean];
Product =['Mobile',25000,false];
let [name,price,available]=Product;

console.log(name);
console.log(price);

if (available){
    console.log("Product is Available");
}
else {
    console.log("Product is Not Available");
}
export {};