import React from "react";
import { AppBar, Badge, Button, Toolbar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../misc/logo.PNG";
import "./Navbar.css";
import { useLogout } from "../hooks/useLogut";

const Navbar = () => {
  const { logout } = useLogout();

  return (
    <div>
      <AppBar color="primary" sx={{ width: "100%", height: "75px" }}>
        <Toolbar sx={{ paddingBottom: "15px", paddingTop: "4px" }}>
          <img
            src={logo}
            alt="A"
            style={{
              height: "30px",
              width: "40px",
            }}
          />
          <div className="name">Curiosity</div>
          <Button sx={{ marginLeft: 160 }}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon color="action" />
            </Badge>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginLeft: "20px" }}
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
