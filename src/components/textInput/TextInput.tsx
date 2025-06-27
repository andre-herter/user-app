import { TextField } from "@mui/material";
import type { ChangeEventHandler } from "react";

type TextInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function TextInput({ value, onChange }: TextInputProps) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      size="small"
      fullWidth
      type="text"
      variant="outlined"
    />
  );
}

export default TextInput;
