import { useState, type ChangeEvent } from "react";
import type { ValidationError } from "../types/Validation";

export function useFormInput(value: string, required = false) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState<ValidationError>({
    isError: false,
    errorMessage: "",
  });

  function handleInputChangeEvent(
    event:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | (Event & { target: { value: string; name?: string } })
  ): void {
    const inputValue = (
      event.target as HTMLInputElement | HTMLSelectElement | { value: string }
    ).value;

    setInputValue(inputValue);

    validateInput(inputValue);
  }

  function validateInput(inputValue: string): boolean {
    if (required) {
      if (inputValue === "") {
        setError({
          isError: true,
          errorMessage: "Bitte geben Sie einen Wert ein",
        });
        return false;
      } else {
        setError({ isError: false, errorMessage: "" });
        return true;
      }
    }
    return true;
  }

  return {
    value: inputValue,
    handleInputChangeEvent,
    error: error,
    validateInput: validateInput,
  };
}
