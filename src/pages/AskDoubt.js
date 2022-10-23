import React from "react";
import Navbar from "../components/Navbar";
import "../components/FieldList.css";
import Search from "../components/Search";

const askDoubt = () => {
  return (
    <div>
      <Navbar />

      <Search style={{ width: "100%" }} />
      <div className="search">Search Previously Solved Doubts</div>
    </div>
  );
};

export default askDoubt;
