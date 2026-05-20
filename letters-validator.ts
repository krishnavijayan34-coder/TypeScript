/// <reference path="validators.ts" />

namespace Validation {
  const lettersRegex = /^[A-Za-z]+$/;

  export class LettersValidator implements StringValidator {
    isValid(s: string): boolean {
      return lettersRegex.test(s);
    }
  }
}