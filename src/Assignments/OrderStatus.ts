enum OrderStatus{
    Pending="Pending",Shipped="Shipped",Delivered="Delivered",Cancelled="Cancelled"
}
class Order{
    orderId:number;
    amount:number;
    status:OrderStatus;
    constructor(orderId:number,amount:number){
        this.orderId=orderId;
        this.amount=amount;
        this.status=OrderStatus.Pending;
    }
    shipOrder(){
        this.status=OrderStatus.Shipped;
    }
    deliverOrder(){
        this.status=OrderStatus.Delivered;
    }
    getStatus(){
        return this.status;
    }
}
let order1=new Order(1,3500);
order1.shipOrder();
order1.deliverOrder();
console.log(order1.getStatus());
export {};