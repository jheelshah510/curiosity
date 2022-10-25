import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "material-ui-search-bar";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

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

      <div>
        <div style={{ marginTop: "15vh", marginLeft: "38vw" }}>
          Search Previously Solved Doubts
        </div>
        <SearchBar
          className="searchbar"
          style={{
            position: "fixed",
            marginTop: "2vh",
            marginLeft: "30vw",
            maxWidth: 800,
            minWidth: 500,
          }}
          autoFocus
        />
        <div
          style={{
            marginTop: "30vh",
            marginLeft: "5vw",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>OR</div>
          <Button onClick={routeChange}>Fields</Button>
        </div>
      </div>
    </div>
  );
};

export default AskDoubt;
