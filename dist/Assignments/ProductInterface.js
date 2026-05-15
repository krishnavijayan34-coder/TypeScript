"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const productStore = new Store();
productStore.add({
    id: 1,
    name: "Tab",
    price: 25000
});
productStore.add({
    id: 2,
    name: "Laptop",
    price: 50000
});
console.log(productStore.getAll());
//# sourceMappingURL=ProductInterface.js.map