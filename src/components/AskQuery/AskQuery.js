import { Button } from "@mui/material";
import React, { useState } from "react";
import "./AskQuery.css";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { useFirestore } from "../../hooks/useFirestore";
import { projectFirestore } from "../../misc/firebase";
import { storage } from "../../misc/firebase";
import { v4 } from "uuid";
const AskQuery = ({ handleClose }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    if (imageUpload == null) return;
    var storageRef = storage.ref();
    var spaceRef = storageRef.child(`images/${imageUpload.name + v4()}`);
    spaceRef.put(imageUpload).then((snapshot) => {
      alert("Image Uploaded");
    });
  };

  const handleSubmit = async () => {
    const doubtData = {
      title,
      description,
    };
    try {
      await projectFirestore.collection("doubt").add(doubtData);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

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
              <input
                type="text"
                className="input1"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </label>

            <label>
              <span>Description</span>
              <textarea
                type="text"
                className="input2"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
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
          <input
            type="file"
            id="imgUpload"
            onChange={(e) => {
              setImageUpload(e.target.files);
            }}
          />
          <Button
            startIcon={<ImageIcon />}
            sx={{ marginRight: "20px", marginLeft: "20px" }}
            color="secondary"
            id="imgUpload"
            onClick={uploadImage()}
          >
            Upload Image
          </Button>
          <Button
            startIcon={<FileUploadOutlinedIcon />}
            sx={{ marginRight: "20px", marginLeft: "20px" }}
            color="primary"
            onClick={() => {
              handleSubmit();
            }}
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
