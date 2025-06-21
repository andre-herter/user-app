import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function Overview() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          component={Link}
          to="/edit/1"
          color="error"
          aria-label="delete"
        >
          <EditIcon to="/overview" />
        </IconButton>
        <IconButton color="error" aria-label="edit">
          <DeleteIcon />
        </IconButton>
      </CardActions>
      <CardMedia sx={{ height: 140 }} image="" title="" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Personeninformation
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <strong>Name:</strong> Max Mustermann
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <strong>Geburtsdatum:</strong> 01.01.1990
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <strong>Geschlecht:</strong> Männlich
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <strong>Adresse:</strong> Musterstraße 12, 12345 Musterstadt
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Overview;
