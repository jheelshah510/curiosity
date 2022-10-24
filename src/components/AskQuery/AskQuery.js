import { Paper } from "@mui/material";
import React from "react";
import "./AskQuery.css";
const AskQuery = () => {
  return (
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: "#ff4500",
          textAlign: "center",
        }}
      >
        <form>
          <label>
            Title
            <input type="text" />
          </label>

          <label>
            Description
            <input type="text" />
          </label>
        </form>

        <button className="sales-btn">Close</button>
      </div>
    </div>
  );
};

export default AskQuery;
