import { Box, CssBaseline, Typography, Button } from "@mui/material";
import type { Gender, User } from "../../types/User";
import DateInput from "../dateInput/DateInput";
import SelectInput from "../selectInput/SelectInput";
import TextInput from "../textInput/TextInput";
import { useFormInput } from "../../hooks/useFormInput";

type UserFormProps = {
  user: User | undefined;
  onSubmit: (user: User) => void;
};

function UserForm({ user, onSubmit }: UserFormProps) {
  console.log(user);
  const userNameProps = useFormInput(user?.name ?? "", true);
  const dobProps = useFormInput(user?.dob ?? "", true);
  const genderProps = useFormInput(user?.gender ?? "", true);
  const emailProps = useFormInput(user?.email ?? "", true);
  const addressProps = useFormInput(user?.address ?? "", true);
  const telephoneProps = useFormInput(user?.phone ?? "", true);
  const websiteProps = useFormInput(user?.web ?? "", true);

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
  function handleSubmitUser() {
    if (isValidInput()) {
      const submittedUser: User = {
        id: user?.id ?? Math.random(),
        name: userNameProps.value,
        dob: dobProps.value,
        gender: convertToGender(genderProps.value),
        email: emailProps.value,
        address: addressProps.value,
        phone: telephoneProps.value,
        web: websiteProps.value,
      };
      onSubmit(submittedUser);
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
          onClick={handleSubmitUser}
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
export default UserForm;
