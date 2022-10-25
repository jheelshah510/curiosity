import React, { useEffect } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Fab } from "@mui/material";
// import NewEventForm from "./AddField";
// import Modal from "./Modal";
import { useAuthContext } from "../hooks/useAuthContext";
import { useHistory } from "react-router-dom";

export default function FieldList() {
  const [showAdd, setShowAdd] = useState(false);
  const [showAsk, setShowAsk] = useState(false);
  const { user } = useAuthContext();

  const history = useHistory();

  const goBack = () => {
    let route = "./ask";
    history.push(route);
    history.go();
  };
  const askField = () => {
    setShowAsk(true);
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
    <div>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="close">
            <CloseIcon onClick={goBack} />
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
      </List>
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
    </div>
  );
}
