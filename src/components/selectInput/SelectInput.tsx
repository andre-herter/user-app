import { Select, MenuItem, type SelectChangeEvent } from "@mui/material";

type SelectInputProps = {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
};

function SelectInput({ value, onChange }: SelectInputProps) {
  return (
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
  );
}

export default SelectInput;
