import React from "react";
import Navbar from "../components/Navbar";
import "../components/FieldList.css";
import Search from "../components/Search";

const askDoubt = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <div className="textarea">
        Or <br /> Ask doubt based on fields
      </div>
      <div className="fields">
        <div className="card">
          <h2>Maths</h2>
        </div>
      </div>
    </div>
  );
};

export default askDoubt;
