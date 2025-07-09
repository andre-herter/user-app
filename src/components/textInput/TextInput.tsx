import { TextField, Typography } from "@mui/material";
import type { ChangeEventHandler } from "react";
import type { ValidationError } from "../../types/Validation";

type TextInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
};

function TextInput({ value, onChange, error }: TextInputProps) {
  function displayError() {
    if (error.isError) {
      return <Typography color="error">{error.errorMessage}</Typography>;
    }
  }

  return (
    <>
      <TextField
        value={value}
        onChange={onChange}
        size="small"
        fullWidth
        type="text"
        variant="outlined"
      />
      {displayError()}
    </>
  );
}

export default TextInput;
