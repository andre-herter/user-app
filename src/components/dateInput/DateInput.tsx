import { TextField, Typography } from "@mui/material";
import type { ChangeEventHandler } from "react";
import type { ValidationError } from "../../types/Validation";

type DateInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
};

function DateInput({ value, onChange, error }: DateInputProps) {
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
        type="date"
        variant="outlined"
        required
      />
      {displayError()}
    </>
  );
}

export default DateInput;
