import React, { useEffect, useState } from "react";
import "./ChatLayout.css";
import CloseIcon from "@mui/icons-material/Close";
import Messages from "./Messages";
import InputMessage from "./InputMessage";
import { useHistory } from "react-router-dom";
import { projectFirestore } from "../../misc/firebase";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useChats } from "../../hooks/useChats";
import { useDoubt } from "../../hooks/useDoubt";

const ChatLayout = () => {
  const [chats, setChats] = useState([]);
  const [showChat, setShowChat] = useState(true);

  const chatData = useChats();
  const initialData = useDoubt();

  let history = useHistory();

  const closeChat = () => {
    setShowChat(false);
    history.goBack();
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatLayout;
