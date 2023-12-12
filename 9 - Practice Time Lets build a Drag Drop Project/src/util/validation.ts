export interface Validation {
  value: string | number;
  required?: boolean;
  minLen?: number;
  maxLen?: number;
  min?: number;
  max?: number;
}
export function validation(validationInput: Validation) {
  let isValid = true;

  if (validationInput.required) {
    isValid = isValid && validationInput.value.toString().length !== 0;
  }

  if (
    validationInput.maxLen != null &&
    typeof validationInput.value === "string"
  ) {
    isValid = isValid && validationInput.value.length <= validationInput.maxLen;
  }

  if (
    validationInput.minLen != null &&
    typeof validationInput.value === "string"
  ) {
    isValid = isValid && validationInput.value.length >= validationInput.minLen;
  }

  if (
    validationInput.max != null &&
    typeof validationInput.value === "number"
  ) {
    isValid = isValid && validationInput.max >= validationInput.value;
  }

  if (
    validationInput.min != null &&
    typeof validationInput.value === "number"
  ) {
    isValid = isValid && validationInput.min <= validationInput.value;
  }

  return isValid;
}
