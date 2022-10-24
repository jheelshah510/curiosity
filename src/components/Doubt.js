import React from "react";
import "./Doubt.css";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { ListItem, ListItemIcon } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Doubt = () => {
  return (
    <div>
      <div className="fields">
        <div className="card">
          <div className="title">What is a stack in DSA?</div>
          <ListItem>
            <ListItemIcon className="list">
              {/* <CheckCircleOutlineRoundedIcon style={{ color: "green" }} />
              Solved */}
              <InfoOutlinedIcon style={{ color: "orange" }} />
              Pending
            </ListItemIcon>
          </ListItem>
        </div>
      </div>
    </div>
  );
};

export default Doubt;
