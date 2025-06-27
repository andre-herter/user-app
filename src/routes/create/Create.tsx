import { Box, Typography, Button, CssBaseline } from "@mui/material";
import { useFormInput } from "../../hooks/useFormInput";
import TextInput from "../../components/textInput/TextInput";
import DateInput from "../../components/dateInput/DateInput";
import SelectInput from "../../components/selectInput/SelectInput";

function Create() {
  const userNameProps = useFormInput("");
  const dobProps = useFormInput("");
  const genderProps = useFormInput("");
  const emailProps = useFormInput("");
  const addressProps = useFormInput("");
  const telephoneProps = useFormInput("");
  const websiteProps = useFormInput("");

  // justifyContent={"center"}

  return (
    <Box display="flex">
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        width="100%"
        maxWidth={500}
        p={2}
        boxShadow={3}
        borderRadius={2}
        bgcolor="background.paper"
      >
        <Box display="flex" flexDirection="column">
          <Typography>Benutzername:</Typography>
          <TextInput
            value={userNameProps.value}
            onChange={userNameProps.handleInputChangeEvent}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Geburtsdatum:</Typography>
          <DateInput
            value={dobProps.value}
            onChange={dobProps.handleInputChangeEvent}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Geschlecht:</Typography>
          <SelectInput
            value={genderProps.value}
            onChange={genderProps.handleInputChangeEvent}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Email Adresse:</Typography>
          <TextInput
            value={emailProps.value}
            onChange={emailProps.handleInputChangeEvent}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Post Adresse:</Typography>
          <TextInput
            value={addressProps.value}
            onChange={addressProps.handleInputChangeEvent}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Telefonnummer:</Typography>
          <TextInput
            value={telephoneProps.value}
            onChange={telephoneProps.handleInputChangeEvent}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Webseite:</Typography>
          <TextInput
            value={websiteProps.value}
            onChange={websiteProps.handleInputChangeEvent}
          />
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Absenden
        </Button>
      </Box>
    </Box>
  );
}

export default Create;
