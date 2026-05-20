/// <reference path="validators.ts" />

namespace Validation {
  const zipRegex = /^[0-9]{6}$/;

  export class ZipCodeValidator implements StringValidator {
    isValid(s: string): boolean {
      return zipRegex.test(s);
    }
  }
}