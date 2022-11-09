import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./AskQuery.css";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { projectFirestore } from "../../misc/firebase";
import { storage } from "../../misc/firebase";
import { v4 } from "uuid";
import { useAuthContext } from "../../hooks/useAuthContext";

const AskQuery = ({ handleClose, fieldId, tempoCode }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [teachCode, setTeachCode] = useState("");

  const uploadImage = () => {
    if (imageUpload == null) return;
    var path = `images/${imageUpload.name + v4()}`;
    var storageRef = storage.ref();
    var spaceRef = storageRef.child(path);
    spaceRef.put(imageUpload).then((snapshot) => {
      alert("Image Uploaded");

      snapshot.ref
        .getDownloadURL()
        .then(function (url) {
          var test = url;
          handleSubmit(test);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  };
  const { user } = useAuthContext();
  const userId = user.uid;
  const [status, setStatus] = useState(false);

  const handleSubmit = async (test) => {
    const combined = userId + teachCode;
    const doubtData = {
      title,
      description,
      status,
      userId,
      combined,
      test,
    };
    try {
      await projectFirestore.collection("doubt").add(doubtData);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = async () => {
    const combinedId =
      userId > teachCode ? userId + teachCode : teachCode + userId;

    try {
      projectFirestore
        .collection("chats")
        .doc(combinedId)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            projectFirestore.collection("chats").doc(combinedId).set({
              messages: [],
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTeachCode(tempoCode);
    console.log(tempoCode);
  }, [tempoCode]);

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
              setImageUpload(e.target.files[0]);
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
              handleSelect();
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
