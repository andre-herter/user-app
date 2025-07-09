import { Box, Typography, Button, CssBaseline } from "@mui/material";
import { useFormInput } from "../../hooks/useFormInput";
import TextInput from "../../components/textInput/TextInput";
import DateInput from "../../components/dateInput/DateInput";
import SelectInput from "../../components/selectInput/SelectInput";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import type { Gender, User } from "../../types/User";

function Create() {
  const userNameProps = useFormInput("", true);
  const dobProps = useFormInput("", true);
  const genderProps = useFormInput("", true);
  const emailProps = useFormInput("", true);
  const addressProps = useFormInput("", true);
  const telephoneProps = useFormInput("", true);
  const websiteProps = useFormInput("", true);

  const { usersDispatch } = useContext(UserContext);

  function convertToGender(value: string): Gender {
    if (value === "männlich" || value === "weiblich") {
      return value;
    }
    throw new Error(`Ungültiger Gender-Wert: ${value}`);
  }

  function isValidInput(): boolean {
    const isNameValid = userNameProps.validateInput(userNameProps.value);
    const isDobValid = dobProps.validateInput(dobProps.value);
    const isGenderValid = genderProps.validateInput(genderProps.value);
    console.log(genderProps.value);

    const isEmailValid = emailProps.validateInput(emailProps.value);
    const isAddressValid = addressProps.validateInput(addressProps.value);
    const isTelephoneValid = telephoneProps.validateInput(telephoneProps.value);
    const isWebsiteValid = websiteProps.validateInput(websiteProps.value);
    return (
      isAddressValid &&
      isNameValid &&
      isDobValid &&
      isEmailValid &&
      isTelephoneValid &&
      isWebsiteValid &&
      isGenderValid
    );
  }

  function handleSubmitNewUser() {
    if (isValidInput()) {
      const user: User = {
        id: Math.random(),
        name: userNameProps.value,
        dob: dobProps.value,
        gender: convertToGender(genderProps.value),
        email: emailProps.value,
        address: addressProps.value,
        phone: telephoneProps.value,
        web: websiteProps.value,
      };
      usersDispatch({ type: "ADD_USER", user: user });
      alert("Benutzer eingefügt");
    } else {
      alert("Bitte Informationen ergänzen");
    }
  }

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
            error={userNameProps.error}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Geburtsdatum:</Typography>
          <DateInput
            value={dobProps.value}
            onChange={dobProps.handleInputChangeEvent}
            error={dobProps.error}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Geschlecht:</Typography>
          <SelectInput
            value={genderProps.value}
            onChange={genderProps.handleInputChangeEvent}
            error={genderProps.error}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Email Adresse:</Typography>
          <TextInput
            value={emailProps.value}
            onChange={emailProps.handleInputChangeEvent}
            error={emailProps.error}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Post Adresse:</Typography>
          <TextInput
            value={addressProps.value}
            onChange={addressProps.handleInputChangeEvent}
            error={addressProps.error}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Telefonnummer:</Typography>
          <TextInput
            value={telephoneProps.value}
            onChange={telephoneProps.handleInputChangeEvent}
            error={telephoneProps.error}
          />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Webseite:</Typography>
          <TextInput
            value={websiteProps.value}
            onChange={websiteProps.handleInputChangeEvent}
            error={websiteProps.error}
          />
        </Box>

        <Button
          onClick={handleSubmitNewUser}
          type="submit"
          variant="contained"
          color="primary"
        >
          Absenden
        </Button>
      </Box>
    </Box>
  );
}

export default Create;
