import {
  Select,
  MenuItem,
  type SelectChangeEvent,
  Typography,
} from "@mui/material";
import type { ValidationError } from "../../types/Validation";

type SelectInputProps = {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  error: ValidationError;
};

function SelectInput({ value, onChange, error }: SelectInputProps) {
  function displayError() {
    if (error.isError) {
      return <Typography color="error">{error.errorMessage}</Typography>;
    }
  }

  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="gender-select"
        size="small"
        value={value}
        onChange={onChange}
      >
        <MenuItem value="männlich">Männlich</MenuItem>
        <MenuItem value="weiblich">Weiblich</MenuItem>
      </Select>
      {displayError()}
    </>
  );
}

export default SelectInput;
