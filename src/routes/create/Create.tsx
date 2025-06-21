import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  CssBaseline,
} from "@mui/material";

function Create() {
  return (
    <Box display="flex" justifyContent={"center"}>
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
          <TextField size="small" fullWidth type="text" variant="outlined" />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Geburtsdatum:</Typography>
          <TextField size="small" fullWidth type="date" variant="outlined" />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Geschlecht:</Typography>
          <Select size="small" defaultValue="" fullWidth>
            <MenuItem value="männlich">Männlich</MenuItem>
            <MenuItem value="weiblich">Weiblich</MenuItem>
          </Select>
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Email Adresse:</Typography>
          <TextField size="small" fullWidth type="email" variant="outlined" />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Post Adresse:</Typography>
          <TextField size="small" fullWidth type="text" variant="outlined" />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Telefonnummer:</Typography>
          <TextField size="small" fullWidth type="tel" variant="outlined" />
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography>Webseite:</Typography>
          <TextField size="small" fullWidth type="text" variant="outlined" />
        </Box>

        <Button variant="contained" color="primary">
          Absenden
        </Button>
      </Box>
    </Box>
  );
}

export default Create;
