"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paymentMethod;
(function (paymentMethod) {
    paymentMethod["Cash"] = "Cash";
    paymentMethod["Card"] = "Card";
    paymentMethod["UPI"] = "UPI";
    paymentMethod["NetBanking"] = "NetBanking";
})(paymentMethod || (paymentMethod = {}));
let payment = paymentMethod.NetBanking;
console.log(payment);
//# sourceMappingURL=Enum.js.map