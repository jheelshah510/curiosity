import { createContext, useReducer } from "react";
import { projectAuth } from "../misc/firebase";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const userId = projectAuth.currentUser.uid;
  console.log(userId);

  const INTITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            userId > action.payload.teachCode
              ? userId + action.payload.teachCode
              : action.payload.teachCode + userId,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INTITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
