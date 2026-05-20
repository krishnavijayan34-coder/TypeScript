"use strict";
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
