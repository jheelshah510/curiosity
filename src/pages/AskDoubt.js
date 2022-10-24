import React from "react";
import Navbar from "../components/Navbar";
import "../components/FieldList.css";
import SearchBar from "material-ui-search-bar";

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
        <div style={{ marginTop: "30vh", marginLeft: "40vw" }}>
          <div>OR</div>
        </div>
      </div>
    </div>
  );
};

export default askDoubt;
