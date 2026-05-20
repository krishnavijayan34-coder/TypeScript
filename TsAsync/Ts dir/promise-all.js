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
function fetchNumber(num) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num);
            }, 1000);
        });
    });
}
function displayNumbers() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield Promise.all([
            fetchNumber(1),
            fetchNumber(2),
            fetchNumber(3)
        ]);
        console.log(results);
    });
}
displayNumbers();
