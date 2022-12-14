import React from "react";
import "./Doubt.css";
import { ListItem, ListItemIcon } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useHistory } from "react-router-dom";

const Doubt = ({ title, status }) => {
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
                <InfoOutlinedIcon style={{ color: "orange" }} />
                Pending
              </ListItemIcon>
            </ListItem>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doubt;
