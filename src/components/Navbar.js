import React from "react";
import { AppBar, Badge, Button, Toolbar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import Picture1 from "../misc/Picture1.png";
import "./Navbar.css";
import { useLogout } from "../hooks/useLogut";

const Navbar = () => {
  const { logout } = useLogout();

  return (
    <div>
      <AppBar
        style={{ background: "white" }}
        position="static"
        sx={{ width: "100%" }}
      >
        <Toolbar variant="regular">
          {/* <img src={Picture1} alt="A" className="picture" /> */}
          <Button sx={{ marginLeft: 175 }}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon color="action" />
            </Badge>
          </Button>
          <Button variant="text" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
