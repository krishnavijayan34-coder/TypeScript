interface Product {
    id:number;
    name:string;
    price:number;
}
class Store<T> {
    private items:T[]=[];
    
    add(item:T):void{
        this.items.push(item);
    }
    getAll():T[]{
        return this.items;
    }
}
const productStore=new Store<Product>();

productStore.add({
    id:1,
    name:"Tab",
    price:25000
});
productStore.add({
    id:2,
    name:"Laptop",
    price:50000
});
console.log(productStore.getAll());
export {};