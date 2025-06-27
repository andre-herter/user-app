import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Button from "../button/Button";
import { Outlet } from "react-router-dom";
import { Divider, ListItem } from "@mui/material";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            height: "100vh",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem
            sx={{ justifyContent: "center", backgroundColor: "#1f2437" }}
          >
            <img src="/logo.png" alt="Logo" width={200} />
          </ListItem>

          <Divider />
          <Button to="/overview" text={"Übersicht"} />
          <Button to="/create" text={"Erstellen"} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Sidebar;
