"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function searchByField(items, key, value) {
    return items.filter(item => item[key] === value);
}
const Products = [
    { id: 1, name: "Mobile", price: 250000, category: "Electronics" },
    { id: 2, name: "Dress", price: 800, category: "Fashion" },
    { id: 3, name: "Book", price: 500, category: "Stationary" },
    { id: 4, name: "Laptop", price: 40000, category: "Electronics" }
];
console.log("Search by name:");
console.log(searchByField(Products, "name", "Dress"));
console.log("Search by price:");
console.log(searchByField(Products, "price", 500));
console.log("Search by category:");
console.log(searchByField(Products, "category", "Electronics"));
//# sourceMappingURL=searchByfield.js.map