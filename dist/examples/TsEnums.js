"use strict";
//  NUMERIC ENUM DEFAULT
var Direction1;
(function (Direction1) {
    Direction1[Direction1["North"] = 0] = "North";
    Direction1[Direction1["East"] = 1] = "East";
    Direction1[Direction1["South"] = 2] = "South";
    Direction1[Direction1["West"] = 3] = "West";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.North);
console.log(Direction1.West);
// NUMERIC ENUM INITIALIZED 
var Direction2;
(function (Direction2) {
    Direction2[Direction2["North"] = 1] = "North";
    Direction2[Direction2["East"] = 2] = "East";
    Direction2[Direction2["South"] = 3] = "South";
    Direction2[Direction2["West"] = 4] = "West";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.North);
console.log(Direction2.West);
//  FULLY INITIALIZED ENUM 
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.NotFound);
console.log(StatusCode.Success);
// STRING ENUM 
var Direction3;
(function (Direction3) {
    Direction3["North"] = "North";
    Direction3["East"] = "East";
    Direction3["South"] = "South";
    Direction3["West"] = "West";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.North);
console.log(Direction3.West);
//# sourceMappingURL=TsEnums.js.map