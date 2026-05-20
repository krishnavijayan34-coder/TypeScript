"use strict";
/// <reference path="validators.ts" />
var Validation;
(function (Validation) {
    const lettersRegex = /^[A-Za-z]+$/;
    class LettersValidator {
        isValid(s) {
            return lettersRegex.test(s);
        }
    }
    Validation.LettersValidator = LettersValidator;
})(Validation || (Validation = {}));
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
/// <reference path="validators.ts" />
/// <reference path="letters-validator.ts" />
/// <reference path="zipcode-validator.ts" />
let validators = {};
validators["letters"] = new Validation.LettersValidator();
validators["zipcode"] = new Validation.ZipCodeValidator();
let inputs = ["Hello", "695527", "ABC123"];
inputs.forEach((input) => {
    for (let name in validators) {
        console.log(input, name, validators[name].isValid(input));
    }
});
