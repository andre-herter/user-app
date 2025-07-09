import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCakeCandles,
  faEnvelope,
  faGlobe,
  faPhone,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { User } from "../../types/User";

function InfoItem({ icon, text }: any) {
  return (
    <Box display="flex" alignItems="center" gap={1} color="text.secondary">
      <FontAwesomeIcon icon={icon} size="sm" />
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        width: "100%",
        maxWidth: 600,
        height: isSmallScreen ? "auto" : 200,
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: isSmallScreen ? "100%" : 200,
          height: isSmallScreen ? 200 : "100%",
          objectFit: "cover",
        }}
        image="https://randomuser.me/api/portraits/men/75.jpg"
        alt="Profilbild"
      />

      <CardContent
        sx={{
          width: "100%",
          pt: isSmallScreen ? 1 : 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton component={Link} to="/edit/1" color="default">
            <EditIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </Box>

        <Typography variant="h5" gutterBottom>
          {user.name}
        </Typography>

        <Box
          display="flex"
          flexDirection={isSmallScreen ? "column" : "row"}
          gap={2}
          flexWrap="wrap"
        >
          <Box display="flex" flexDirection="column" gap={1} flex={1}>
            <InfoItem icon={faCakeCandles} text={user.dob} />
            <InfoItem icon={faAddressCard} text={user.address} />
            <InfoItem icon={faVenusMars} text={user.gender} />
          </Box>

          <Box display="flex" flexDirection="column" gap={1} flex={1}>
            <InfoItem icon={faPhone} text={user.phone} />
            <InfoItem icon={faEnvelope} text={user.email} />
            <InfoItem icon={faGlobe} text={user.web} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default UserCard;
