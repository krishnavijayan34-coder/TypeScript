"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
class Order {
    orderId;
    amount;
    status;
    constructor(orderId, amount) {
        this.orderId = orderId;
        this.amount = amount;
        this.status = OrderStatus.Pending;
    }
    shipOrder() {
        this.status = OrderStatus.Shipped;
    }
    deliverOrder() {
        this.status = OrderStatus.Delivered;
    }
    getStatus() {
        return this.status;
    }
}
let order1 = new Order(1, 3500);
order1.shipOrder();
order1.deliverOrder();
console.log(order1.getStatus());
//# sourceMappingURL=OrderStatus.js.map