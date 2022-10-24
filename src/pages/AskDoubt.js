import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "material-ui-search-bar";
import FullScreenDialog from "../components/FullScreenDialog";

const askDoubt = () => {
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
          <FullScreenDialog />
        </div>
      </div>
    </div>
  );
};

export default askDoubt;
