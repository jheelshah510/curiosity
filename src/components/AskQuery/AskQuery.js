import { Button } from "@mui/material";
import React from "react";
import "./AskQuery.css";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const AskQuery = ({ handleClose }) => {
  return (
    <div>
      (
      <div className="modal-backdrop">
        <div
          className="modal"
          style={{
            border: "4px solid",
            borderColor: "#ff4500",
            textAlign: "center",
          }}
        >
          <h3>Ask your Doubt</h3>
          <form className="new-event-form">
            <label>
              <span>Title</span>
              <input type="text" className="input1" />
            </label>

            <label>
              <span>Description</span>
              <textarea type="text" className="input2" />
            </label>
          </form>
          <Button
            onClick={handleClose}
            startIcon={<CloseIcon color="red" />}
            sx={{ marginRight: "20px", marginLeft: "20px", color: "orange" }}
            size="large"
          >
            Discard
          </Button>
          <Button
            startIcon={<ImageIcon />}
            sx={{ marginRight: "20px", marginLeft: "20px" }}
            color="secondary"
          >
            Upload Image
          </Button>
          <Button
            startIcon={<FileUploadOutlinedIcon />}
            sx={{ marginRight: "20px", marginLeft: "20px" }}
            color="primary"
          >
            Upload
          </Button>
        </div>
      </div>
      )
    </div>
  );
};

export default AskQuery;
