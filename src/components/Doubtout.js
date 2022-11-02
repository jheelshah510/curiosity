import React from "react";
import "./Doubt.css";
import { ListItem, ListItemIcon } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { useHistory } from "react-router-dom";

function Doubtout({ title, status }) {
  const history = useHistory();
  const redirectChat = () => {
    let path = "/teeest";
    history.push(path);
  };
  return (
    <div>
      {!status && (
        <div className="fields">
          <div
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => {
              redirectChat();
            }}
          >
            <div className="title">{title}</div>
            <ListItem>
              <ListItemIcon className="list">
                <CheckCircleOutlineRoundedIcon style={{ color: "green" }} />
                Solved
              </ListItemIcon>
            </ListItem>
          </div>
        </div>
      )}
    </div>
  );
}

export default Doubtout;
