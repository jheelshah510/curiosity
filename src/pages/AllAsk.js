import React from "react";
import "../components/Doubt.css";
import { ListItem, ListItemIcon } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useHistory } from "react-router-dom";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const AllAsk = ({ title, status }) => {
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
          <div className="title">{title}</div>
          <ListItem>
            <ListItemIcon className="list">
              {status && (
                <>
                  <CheckCircleOutlineRoundedIcon style={{ color: "green" }} />
                  Solved
                </>
              )}
              {!status && (
                <>
                  <InfoOutlinedIcon style={{ color: "orange" }} />
                  Pending
                </>
              )}
            </ListItemIcon>
          </ListItem>
        </div>
      </div>
    </div>
  );
};

export default AllAsk;
