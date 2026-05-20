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
