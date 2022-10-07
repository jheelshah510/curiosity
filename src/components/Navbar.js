import React from "react";
import { AppBar, Badge, Button, Toolbar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <div>
      <AppBar style={{ background: "white" }}>
        <Toolbar variant="regular">
          <Button sx={{ marginLeft: 175 }}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon color="action" />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
