import { useState, type ChangeEvent } from "react";

export function useFormInput(value: string) {
  const [inputValue, setInputValue] = useState(value);

  function handleInputChangeEvent(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    console.log(event.target.value);

    setInputValue(event.target.value);
  }
  return {
    value: inputValue,
    handleInputChangeEvent,
  };
}
