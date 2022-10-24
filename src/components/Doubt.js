import React from "react";
import "./Doubt.css";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { ListItem, ListItemIcon } from "@mui/material";

const Doubt = () => {
  return (
    <div>
      <div className="fields">
        <div className="card">
          <div className="title">Title</div>
          <ListItem>
            <ListItemIcon className="list">
              <CheckCircleOutlineRoundedIcon style={{ color: "green" }} />
              Solved
            </ListItemIcon>
          </ListItem>
        </div>
      </div>
    </div>
  );
};

export default Doubt;
