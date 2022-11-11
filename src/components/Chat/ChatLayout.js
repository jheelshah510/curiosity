import React, { useEffect, useState } from "react";
import "./ChatLayout.css";
import CloseIcon from "@mui/icons-material/Close";
import Messages from "./Messages";
import InputMessage from "./InputMessage";
import { useHistory } from "react-router-dom";
import { useDoubt } from "../../hooks/useDoubt";
import { Button } from "@mui/material";
import { projectFirestore } from "../../misc/firebase";
import { useAuthContext } from "../../hooks/useAuthContext";

const ChatLayout = () => {
  const [showChat, setShowChat] = useState(true);

  const user = useAuthContext();

  const initialData = useDoubt();
  const [solved, setIsSolved] = useState(initialData[0].status);

  let history = useHistory();

  const closeChat = () => {
    setShowChat(false);
    history.goBack();
  };

  useEffect(() => {
    const isTeacher = () => {
      if (user.email === "teacher123@gmail.com") {
        setIsSolved(true);
      }
    };
    isTeacher();
  }, [user]);

  const handleStatus = () => {
    setIsSolved(true);
    alert("Congratulation, doubt solved");

    try {
      projectFirestore
        .collection("doubt")
        .where("title", "==", initialData[0].title)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id);
            let stay = doc.id;
            projectFirestore.collection("doubt").doc(stay).update({
              status: true,
            });
          });
        });
    } catch (error) {
      console.log(error);
    }
    closeChat();
    closeChat();
  };

  return (
    <div>
      {showChat && (
        <div className="chill">
          <div
            className="chillax"
            style={{
              border: "4px solid",
              borderColor: "#8A8AFF",
              textAlign: "center",
            }}
          >
            <div className="doubtField">
              <span>
                <CloseIcon
                  sx={{ float: "left", cursor: "pointer" }}
                  onClick={() => {
                    closeChat();
                  }}
                />
              </span>
              <span>{initialData[0].title}</span>
            </div>
            <Messages />
            <InputMessage />

            {!solved && (
              <Button
                variant="contained"
                sx={{ marginLeft: 90, height: 20 }}
                onClick={() => {
                  handleStatus();
                }}
              >
                Mark as solved
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatLayout;
