import React, { forwardRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Fab } from "@mui/material";
// import NewEventForm from "./AddField";
// import Modal from "./Modal";
import { useAuthContext } from "../hooks/useAuthContext";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const { user } = useAuthContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const isAdmin = () => {
      if (user.email === "20cs082@charusat.edu.in") {
        setShowAdd(true);
      } else {
        setShowAdd(false);
      }
    };
    isAdmin();
  }, [user]);

  return (
    <div style={{ marginTop: "5vh" }}>
      <div style={{ marginBottom: "30px" }}>Ask doubt based on fields</div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Show Fields
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, display: "flex", justifyContent: "center" }}
              variant="h6"
              component="div"
            >
              Fields
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" sx={{ height: 40 }} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>

          {/* <IconButton
            style={{
              position: "fixed",
              bottom: 130,
              right: 150,
              cursor: "pointer",
            }}
            color="primary"
          >
            <AddIcon />
          </IconButton> */}

          {showAdd && (
            <Fab
              color="secondary"
              sx={{
                position: "absolute",
                marginTop: "50vh",
                right: 160,
              }}
            >
              <AddIcon />
            </Fab>
          )}
        </List>
      </Dialog>
    </div>
  );
}
