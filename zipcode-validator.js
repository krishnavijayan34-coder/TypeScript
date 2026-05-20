"use strict";
/// <reference path="validators.ts" />
var Validation;
(function (Validation) {
    const zipRegex = /^[0-9]{6}$/;
    class ZipCodeValidator {
        isValid(s) {
            return zipRegex.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
