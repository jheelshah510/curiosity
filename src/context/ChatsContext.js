import { createContext, useEffect, useState } from "react";
import { projectFirestore } from "../misc/firebase";

export const ChatsContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatData, setChatData] = useState(null);

  useEffect(() => {
    projectFirestore
      .collection("chats")
      .get()
      .then((snap) => {
        if (snap.empty) {
          console.log("no chats");
        } else {
          let results = [];
          snap.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setChatData(results);
        }
      });
  }, []);

  return (
    <ChatsContext.Provider value={chatData}>{children}</ChatsContext.Provider>
  );
};
