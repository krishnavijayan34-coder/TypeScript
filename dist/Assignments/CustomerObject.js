"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customers = [
    {
        id: 1, name: "krishna", email: "krishna@gmail.com", phone: 7306410867
    },
    {
        id: 2, name: "Megha", email: "megha@gmail.com"
    },
    {
        id: 3, name: "Gowri", email: "gowri@gmail.com", phone: 9037534932
    }
];
for (const { id, name, email, phone } of customers) {
    console.log(`
    Customer Id : ${id}
Name        : ${name}
Email       : ${email}
Phone       : ${phone ?? "Not Available"}`);
}
//# sourceMappingURL=CustomerObject.js.map