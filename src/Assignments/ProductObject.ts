type Product={id:number,productName:string,price:number,
    inStock:boolean;
}

const product:Product={
    id:1,productName:"Mobile",price:30000,
    inStock:true
}
if (product.inStock){
    console.log("Product is available")
}
else{
    console.log("product is not available")
}