import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

type ButtonsProps = {
  to: string;
  text: string;
};

function Buttons({ text, to }: ButtonsProps) {
  return (
    <Stack margin={2} direction="column">
      <Button component={Link} to={to} variant="contained">
        {text}
      </Button>
    </Stack>
  );
}

export default Buttons;
