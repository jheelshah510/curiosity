import React, { useState } from "react";
import "./ChatLayout.css";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { useChats } from "../../hooks/useChats";
import { useDoubt } from "../../hooks/useDoubt";
import { useAuthContext } from "../../hooks/useAuthContext";
import { projectFirestore, storage } from "../../misc/firebase";
import firebase from "firebase";
import { v4 as uuid } from "uuid";

const InputMessage = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const user = useAuthContext();
  const chatData = useChats();
  const initialData = useDoubt();
  const userId = user.uid;

  const handleSend = () => {
    if (image) {
      var path = `images/${image.name + uuid()}`;
      var storageRef = storage.ref();
      var spaceRef = storageRef.child(path);
      spaceRef.put(image).then((snapshot) => {
        alert("Image Uploaded");

        snapshot.ref
          .getDownloadURL()
          .then(function (url) {
            var imgUrl = url;
            projectFirestore
              .collection("chats")
              .doc(initialData[0].combined)
              .collection("messages")
              .doc(uuid())
              .set({
                messages: {
                  description,
                  senderId: userId,
                  img: imgUrl,
                },
              });
          })

          .catch(function (err) {
            console.log(err);
          });
      });
    } else {
      projectFirestore
        .collection("chats")
        .doc(initialData[0].combined)
        .collection("messages")
        .doc(uuid())
        .set({
          messages: {
            description,
            senderId: userId,
          },
        });
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type Text Here...."
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <label htmlFor="file">
          <ImageOutlinedIcon />
        </label>
        <button className="sandy" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default InputMessage;
