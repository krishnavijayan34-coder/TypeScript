"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printValue(value) {
    if (typeof value == "string") {
        console.log("string value:", value);
    }
    else if (typeof value == "number") {
        console.log("Number value :", value);
    }
    else if (typeof value == "boolean") {
        console.log("Boolean value :", value);
    }
    else {
        console.log("Unknown type");
    }
}
printValue("Krishna");
printValue(100);
printValue(true);
//# sourceMappingURL=UnknownType.js.map