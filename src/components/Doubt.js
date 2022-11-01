import React from "react";
import "./Doubt.css";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { ListItem, ListItemIcon } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useHistory } from "react-router-dom";

const Doubt = () => {
  const history = useHistory();
  const redirectChat = () => {
    let path = "/teeest";
    history.push(path);
  };
  return (
    <div>
      <div className="fields">
        <div
          className="card"
          style={{ cursor: "pointer" }}
          onClick={() => {
            redirectChat();
          }}
        >
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
