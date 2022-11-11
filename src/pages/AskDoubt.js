import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Button,
  IconButton,
  InputBase,
  ListItem,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import "./AskDoubt.css";
import SearchIcon from "@mui/icons-material/Search";
import { projectFirestore } from "../misc/firebase";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const AskDoubt = () => {
  const [doubtTitle, setDoubtTitle] = useState();
  const [doubt, setDoubt] = useState();
  const [error, setError] = useState();
  const [dId, setDid] = useState();
  const history = useHistory();
  const redirectChat = () => {
    let path = "/teeest";
    history.push(path);
  };
  const st = true;

  const routeChange = () => {
    let path = "fields";

    history.push(path);
    history.go();
  };

  const handleSearch = () => {
    projectFirestore
      .collection("doubt")
      .where("title", "==", doubtTitle)
      .where("status", "==", st)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDoubt(doc.data());
          setDid(doc.id);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        setError(error);
      });
  };
  console.log(doubt);

  return (
    <div>
      <Navbar />
      <div className="vertical"></div>

      <div>
        <div className="align">
          <Typography
            variant="body1"
            style={{ marginTop: "20vh", marginLeft: "10vw", width: "20vw" }}
          >
            Search Previously Solved Doubts
          </Typography>
          {/* <SearchBar
            className="searchbar"
            style={{
              position: "fixed",
              marginTop: "2vh",
              marginLeft: "2vw",
              maxWidth: 800,
              minWidth: 500,
            }}
            autoFocus
            // onChange={(e) => {
            //   setDoubt(e.target.value);
            // }}
          >
            <Input
              type="text"
              onChange={(e) => {
                setDoubt(e.target.value);
              }}
            />
          </SearchBar> */}

          {/* <TextField
            style={{ marginLeft: "4vw", width: 500, marginTop: "20px" }}
          >
            <IconButton type="button" sx={{ p: "10px" }} edge="end">
              <SearchIcon />
            </IconButton>
          </TextField> */}
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              marginLeft: "5vw",
              marginTop: "3vh",
            }}
            variant="outlined"
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Doubts"
              onChange={(e) => {
                setDoubtTitle(e.target.value);
              }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => {
                handleSearch();
              }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div
          style={{
            marginTop: "-11vh",
            marginLeft: "60vw",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            Ask Doubt based on different fields
          </Typography>
          <Button
            onClick={routeChange}
            style={{ marginTop: "20px" }}
            variant="contained"
            color="secondary"
          >
            Fields
          </Button>
        </div>
        {error && <span>No doubt found</span>}
        {doubt && (
          <div className="fields">
            <div
              className="card"
              style={{ cursor: "pointer", marginLeft: "5vw" }}
              onClick={() => {
                redirectChat();
              }}
            >
              <div className="title">{doubt.title}</div>
              <ListItem>
                <ListItemIcon className="list">
                  <CheckCircleOutlineRoundedIcon style={{ color: "green" }} />
                  Solved
                </ListItemIcon>
              </ListItem>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskDoubt;
