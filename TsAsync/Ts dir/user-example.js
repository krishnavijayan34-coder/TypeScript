"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "Krishna",
                    email: "krishna@gmail.com"
                },
                {
                    id: 2,
                    name: "Gowri",
                    email: "gowri@gmail.com"
                }
            ]);
        }, 2000);
    });
}
function displayUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield fetchUsers();
        users.forEach((user) => {
            console.log(user.name);
            console.log(user.email);
        });
    });
}
displayUsers();
