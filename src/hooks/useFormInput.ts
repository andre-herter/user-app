import { useState, type ChangeEvent } from "react";
import type { ValidationError, InputType } from "../types/Validation";

export function useFormInput(
  value: string,
  required = false,
  type?: InputType
) {
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
    const trimmed = inputValue.trim();

    if (required && trimmed === "") {
      setError({
        isError: true,
        errorMessage: "Bitte geben Sie einen Wert ein",
        inputType: type,
      });
      return false;
    }

    const validators: Record<InputType, () => boolean> = {
      email: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed),
      tel: () => /^[+]?[\d\s\-()]{7,}$/.test(trimmed),
      url: () => {
        try {
          new URL(trimmed);
          return true;
        } catch {
          return false;
        }
      },
    };

    const messages: Record<InputType, string> = {
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      tel: "Bitte geben Sie eine gültige Telefonnummer ein",
      url: "Bitte geben Sie eine gültige URL ein",
    };

    if (type && trimmed !== "" && type in validators && !validators[type]()) {
      setError({
        isError: true,
        errorMessage: messages[type],
        inputType: type,
      });
      return false;
    }

    setError({
      isError: false,
      errorMessage: "",
      inputType: type,
    });

    return true;
  }

  return {
    value: inputValue,
    handleInputChangeEvent,
    error,
    validateInput,
  };
}
