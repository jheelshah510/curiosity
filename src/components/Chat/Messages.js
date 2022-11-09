import React, { useEffect, useState } from "react";
import Message from "./Message";
import "./ChatLayout.css";
import { useDoubt } from "../../hooks/useDoubt";
import { projectFirestore } from "../../misc/firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const initialData = useDoubt();
  const docat = initialData[0].combined;

  // useEffect(() => {
  //   projectFirestore
  //     .collection("chats")
  //     .doc(docat)
  //     .onSnapshot((doc) => {
  //       doc.exists && setMessages(doc.data().messages);
  //     });
  // }, [docat]);
  return (
    <div className="messages">
      {/* {messages.map((m) => {
        <Message message={m} />;
      })} */}
    </div>
  );
};

export default Messages;
