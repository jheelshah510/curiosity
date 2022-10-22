import React from "react";
import { AppBar, Badge, Button, Toolbar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import Picture1 from "../misc/Picture1.png";
// import "./Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Test.css";
import { useLogout } from "../../hooks/useLogut";
const Test = () => {
  const { logout } = useLogout();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <PersonIcon
            color="action"
            onClick={handleClick}
            sx={{ cursor: "pointer" }}
          />
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Test;
