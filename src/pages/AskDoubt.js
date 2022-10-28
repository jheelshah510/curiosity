import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "material-ui-search-bar";
import { Button, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./AskDoubt.css";

const AskDoubt = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "fields";

    history.push(path);
    history.go();
  };
  return (
    <div>
      <Navbar />
      <div className="vertical"></div>

      <div>
        <div>
          <Typography
            variant="body1"
            style={{ marginTop: "20vh", marginLeft: "10vw", width: "20vw" }}
          >
            Search Previously Solved Doubts
          </Typography>
          <SearchBar
            className="searchbar"
            style={{
              position: "fixed",
              marginTop: "2vh",
              marginLeft: "2vw",
              maxWidth: 800,
              minWidth: 500,
            }}
            autoFocus
          />
        </div>
        <div
          style={{
            marginTop: "-3vh",
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
      </div>
    </div>
  );
};

export default AskDoubt;
