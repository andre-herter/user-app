import { TextField } from "@mui/material";
import type { ChangeEventHandler } from "react";

type DateInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function DateInput({ value, onChange }: DateInputProps) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      size="small"
      fullWidth
      type="date"
      variant="outlined"
    />
  );
}

export default DateInput;
