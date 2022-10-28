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
import AskQuery from "../components/AskQuery/AskQuery";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { database } from "../misc/firebase";
import { useFields } from "../context/FieldsContext";
import ShowField from "../components/ShowField";

export default function FieldList() {
  const [showAdd, setShowAdd] = useState(false);
  const [showAsk, setShowAsk] = useState(false);
  const { user } = useAuthContext();
  const [fieldName, setFieldName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [code, setCode] = useState("");

  const fields = useFields();

  const history = useHistory();

  const goBack = () => {
    let route = "./ask";
    history.push(route);
    history.go();
  };
  const askField = () => {
    setShowAsk(true);
  };

  const [showModal, setShowModal] = useState(false);
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

  const handleClose = () => {
    setShowAsk(false);
    setShowModal(false);
  };
  const handleSubmit = async () => {
    const fieldData = {
      fieldName,
      teacherName,
      code,
    };
    try {
      await database.ref("fields").push(fieldData);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

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
        {fields &&
          fields.length > 0 &&
          fields.map((field) => (
            <ListItem key={field.id}>
              <ShowField field={field} />
            </ListItem>
          ))}

        <Divider />
      </List>
      {showAdd && (
        <Fab
          color="secondary"
          sx={{
            position: "absolute",
            marginTop: "50vh",
            right: 160,
          }}
          onClick={() => {
            setShowModal(true);
          }}
        >
          <AddIcon />
        </Fab>
      )}

      {showModal && (
        <div className="modal-backdrop">
          <div
            className="modal"
            style={{
              border: "4px solid",
              borderColor: "#ff4500",
              textAlign: "center",
            }}
          >
            <h3>Add Field</h3>
            <form
              className="new-event-form"
              onSubmit={() => {
                handleSubmit();
              }}
            >
              <label>
                <span>Field name</span>
                <input
                  type="text"
                  className="input1"
                  onChange={(e) => {
                    setFieldName(e.target.value);
                  }}
                />
              </label>
              <label>
                <span>Add Teacher</span>
                <input
                  type="text"
                  className="input1"
                  onChange={(e) => {
                    setTeacherName(e.target.value);
                  }}
                />
              </label>
              <label>
                <span>Code</span>
                <input
                  type="text"
                  className="input1"
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </label>
            </form>
            <Button
              onClick={handleClose}
              startIcon={<CloseIcon color="red" />}
              sx={{ marginRight: "20px", marginLeft: "20px", color: "orange" }}
              size="large"
            >
              Discard
            </Button>
            <Button
              startIcon={<AddBoxIcon />}
              sx={{ marginRight: "20px", marginLeft: "20px" }}
              color="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Add
            </Button>
          </div>
        </div>
      )}
      {showAsk && <AskQuery handleClose={handleClose} />}
    </div>
  );
}
